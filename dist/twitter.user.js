// ==UserScript==
// @name         Get Twitter Icons Back
// @namespace    Pionxzh
// @version      1.6.0
// @author       Pionxzh
// @description  Brings back the blue bird icon on Twitter. No more 𝕏.
// @license      MIT
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// @match        https://twitter.com/*
// @match        https://x.com/*
// @match        https://tweetdeck.twitter.com/*
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const xIconPath = "M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0";
  const xIconInNotificationPath = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
  const twitterIconPath = "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";
  const twitterBlue = "rgb(29,155,240)";
  const twitterGray = "rgb(231,233,234)";
  const linkMap = {
    "mask-icon": "https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg",
    // 'shortcut icon': '//abs.twimg.com/favicons/twitter.2.ico',
    "apple-touch-icon": "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png"
  };
  const metaMap = {
    "apple-mobile-web-app-title": "Twitter"
  };
  const twitterFavicon = "//abs.twimg.com/favicons/twitter.2.ico";
  const twitterFaviconWithDot = "//abs.twimg.com/favicons/twitter-pip.2.ico";
  function main() {
    waitForElement("body").then(() => {
      doSyncColorScheme();
    });
    waitForElement("head").then(() => {
      injectStyle();
      monitorHead();
      monitorTitle();
    });
  }
  function syncColorScheme() {
    const bgColor = document.body.style.backgroundColor;
    if (bgColor === "#FFFFFF" || bgColor === "rgb(255, 255, 255)") {
      document.documentElement.setAttribute("data-color-scheme", "light");
    } else if (bgColor === "#000000" || bgColor === "rgb(0, 0, 0)") {
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else if (bgColor === "#15202B" || bgColor === "rgb(21, 32, 43)") {
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.setAttribute("data-color-scheme", system);
    }
  }
  async function doSyncColorScheme() {
    syncColorScheme();
    const bodyStyleObserver = new MutationObserver(syncColorScheme);
    bodyStyleObserver.observe(document.body, { attributes: true });
  }
  function injectStyle() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
svg > g > path[d='${xIconPath}'],
svg > g > path[d='${xIconInNotificationPath}'] {
    d: path('${twitterIconPath}');
}

#placeholder > svg,
h1 a[href='/home'] svg,
svg[data-testid="icon-verified"],
[data-testid="TopNavBar"] div:not([role="button"]) > div > svg,
[data-testid="cellInnerDiv"] svg:has(g > path[d='${xIconInNotificationPath}']) {
    color: ${twitterBlue};
}

[data-color-scheme="dark"] h1 a[href='/home'] svg {
    color: ${twitterGray};
}`);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  }
  const mutationObserverOptions = { subtree: true, characterData: true, childList: true, attributes: true };
  async function waitForElement(selector) {
    const el = document.querySelector(selector);
    if (el)
      return el;
    return new Promise((resolve) => {
      const fn = () => {
        const el2 = document.querySelector(selector);
        if (el2) {
          return resolve(el2);
        }
        requestAnimationFrame(fn);
      };
      requestAnimationFrame(fn);
    });
  }
  function monitorHead() {
    const sync = () => {
      Object.entries(linkMap).forEach(([rel, targetValue]) => {
        const link = document.querySelector(`link[rel="${rel}"]`);
        if (link && link.getAttribute("href") !== targetValue) {
          link.setAttribute("href", targetValue);
        }
      });
      Object.entries(metaMap).forEach(([name, targetValue]) => {
        const meta = document.querySelector(`meta[name="${name}"]`);
        if (meta && meta.getAttribute("content") !== targetValue) {
          meta.setAttribute("content", targetValue);
        }
      });
      const shortcut = document.querySelector('link[rel="shortcut icon"]');
      if (shortcut) {
        const hasNotification = document.querySelector('a[data-testid="AppTabBar_Notifications_Link"] svg ~ div[aria-live="polite"]');
        const targetValue = hasNotification ? twitterFaviconWithDot : twitterFavicon;
        if (shortcut.getAttribute("href") !== targetValue) {
          shortcut.setAttribute("href", targetValue);
        }
      }
    };
    sync();
    window.addEventListener("visibilitychange", sync);
    new MutationObserver(sync).observe(document.head, mutationObserverOptions);
  }
  async function monitorTitle() {
    const titleEl = await waitForElement("head > title");
    const sync = () => {
      if (document.title.endsWith(" / X")) {
        document.title = `${document.title.slice(0, -1)}Twitter`;
      }
    };
    sync();
    window.addEventListener("visibilitychange", sync);
    new MutationObserver(sync).observe(titleEl, mutationObserverOptions);
  }
  main();

})();
