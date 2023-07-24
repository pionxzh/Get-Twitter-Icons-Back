// ==UserScript==
// @name         Get Twitter Icons Back
// @namespace    Pionxzh
// @version      1.1.0
// @author       Pionxzh
// @description  Restore the old icon on Twitter
// @license      MIT
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// @match        https://twitter.com/*
// @match        https://x.com/*
// ==/UserScript==

(function () {
  'use strict';

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var sentinel_umd = { exports: {} };
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function() {
      var isArray = Array.isArray, selectorToAnimationMap = {}, animationCallbacks = {}, styleEl, styleSheet, cssRules;
      return {
        /**
         * Add watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function
         */
        on: function(cssSelectors, callback) {
          if (!callback)
            return;
          if (!styleEl) {
            var doc = document, head = doc.head;
            doc.addEventListener("animationstart", function(ev, callbacks, l, i) {
              callbacks = animationCallbacks[ev.animationName];
              if (!callbacks)
                return;
              ev.stopImmediatePropagation();
              l = callbacks.length;
              for (i = 0; i < l; i++)
                callbacks[i](ev.target);
            }, true);
            styleEl = doc.createElement("style");
            head.append(styleEl);
            styleSheet = styleEl.sheet;
            cssRules = styleSheet.cssRules;
          }
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, isCustomName) {
            animId = selectorToAnimationMap[selector];
            if (!animId) {
              isCustomName = selector[0] == "!";
              selectorToAnimationMap[selector] = animId = isCustomName ? selector.slice(1) : "sentinel-" + Math.random().toString(16).slice(2);
              cssRules[styleSheet.insertRule(
                "@keyframes " + animId + "{from{transform:none;}to{transform:none;}}",
                cssRules.length
              )]._id = selector;
              if (!isCustomName) {
                cssRules[styleSheet.insertRule(
                  selector + "{animation-duration:0.0001s;animation-name:" + animId + ";}",
                  cssRules.length
                )]._id = selector;
              }
              selectorToAnimationMap[selector] = animId;
            }
            (animationCallbacks[animId] = animationCallbacks[animId] || []).push(callback);
          });
        },
        /**
         * Remove watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function (optional)
         */
        off: function(cssSelectors, callback) {
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, callbackList, i) {
            if (!(animId = selectorToAnimationMap[selector]))
              return;
            callbackList = animationCallbacks[animId];
            if (callback) {
              i = callbackList.length;
              while (i--) {
                if (callbackList[i] === callback)
                  callbackList.splice(i, 1);
              }
            } else {
              callbackList = [];
            }
            if (callbackList.length)
              return;
            i = cssRules.length;
            while (i--) {
              if (cssRules[i]._id == selector)
                styleSheet.deleteRule(i);
            }
            delete selectorToAnimationMap[selector];
            delete animationCallbacks[animId];
          });
        },
        /**
         * Reset watchers and cache
         */
        reset: function() {
          selectorToAnimationMap = {};
          animationCallbacks = {};
          if (styleEl)
            styleEl.parentNode.removeChild(styleEl);
          styleEl = 0;
        }
      };
    });
  })(sentinel_umd);
  var sentinel_umdExports = sentinel_umd.exports;
  const sentinel = /* @__PURE__ */ getDefaultExportFromCjs(sentinel_umdExports);
  function onloadSafe(fn) {
    if (document.readyState === "complete") {
      fn();
    } else {
      window.addEventListener("load", fn);
    }
  }
  main();
  const twitterIconSvg = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-k200y r-1cvl2hr r-4qtqp9 r-yyyyoo r-eu3ka r-dnmrzs r-bnwqim r-1plcrui r-lrvibr old-twitter-icon"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';
  const linkMap = {
    "mask-icon": "https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg",
    "shortcut icon": "//abs.twimg.com/favicons/twitter.2.ico",
    "apple-touch-icon": "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png"
  };
  const metaMap = {
    "apple-mobile-web-app-title": "Twitter"
  };
  function main() {
    onloadSafe(() => {
      injectStyle();
      const placeHolderIconSelector = "#placeholder > svg";
      replaceIcon(placeHolderIconSelector);
      const headerIconSelector = "h1 a[href='/home'] svg";
      replaceIcon(headerIconSelector);
      replaceLinkRel();
      replaceMetaName();
    });
  }
  function injectStyle() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
.old-twitter-icon {
    height: 1.75rem;
    width: 20px;
    max-width: 100%;
    fill: currentcolor;
    color: rgba(29,155,240,1.00);
    vertical-align: text-bottom;
    position: relative;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    display: inline-block;
}`);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  }
  function replaceIcon(selector) {
    sentinel.on(selector, (svg) => {
      svg.innerHTML = twitterIconSvg;
      sentinel.off(selector);
    });
  }
  function replaceLinkRel() {
    const links = document.querySelectorAll("link[rel]");
    links.forEach((link) => {
      const rel = link.getAttribute("rel");
      if (rel && linkMap[rel] && link.getAttribute("href") !== linkMap[rel]) {
        link.setAttribute("href", linkMap[rel]);
      }
    });
  }
  function replaceMetaName() {
    const metaList = document.querySelectorAll("meta[name]");
    metaList.forEach((meta) => {
      const name = meta.getAttribute("name");
      if (name && metaMap[name] && meta.getAttribute("content") !== metaMap[name]) {
        meta.setAttribute("content", metaMap[name]);
      }
    });
  }

})();
