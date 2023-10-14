const xIconPath = 'M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0'
const xIconInNotificationPath = 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
const twitterBlueBirdIconPath = 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'

// every source says this is the path of the home icon, but it's not on my machine :(
const xHomeIconPath = 'M11.54 2.345c.276-.194.644-.194.92 0l8 5.623c.213.15.34.394.34.655V21c0 .442-.358.8-.8.8h-5.855c-.442 0-.8-.358-.8-.8v-6.7h-2.69V21c0 .442-.359.8-.8.8H4c-.442 0-.8-.358-.8-.8V8.623c0-.26.127-.505.34-.655zM12 3.978l-7.2 5.06V20.2h4.255v-6.7c0-.442.358-.8.8-.8h4.29c.442 0 .8.358.8.8v6.7H19.2V9.038z'
const xHomeActiveIconPath = 'M11.54 2.345c.276-.194.644-.194.92 0l8 5.623c.213.15.34.394.34.655V21c0 .442-.358.8-.8.8h-5.855c-.442 0-.8-.358-.8-.8v-6.7h-2.69V21c0 .442-.359.8-.8.8H4c-.442 0-.8-.358-.8-.8V8.623c0-.26.127-.505.34-.655z'

// this is the path of the home icon on my machine
const xHouseIconPath = 'M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z'
const xHouseActiveIconPath = 'M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z'

const twitterHomeIconPath = 'M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z'
const twitterHomeActiveIconPath = 'M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z'

const twitterBlueIconPath = 'M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23zM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18zM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5z'
// I'm not sure when this icon is used, I guess it was used before, then replaced with the one above?
// const twitterBlueIconFilledPath = 'M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23z'

// const verifiedIconSvg = 'M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z'

// const exploreHashTagIconPath = 'M10.64 3.157l-.36 3.593h4.99l.38-3.892 2.99.299-.36 3.593h2.97v2.5h-3.22l-.55 5.5h2.77v2.5h-3.02l-.39 3.892-2.98-.299.36-3.593H9.23l-.39 3.892-2.98-.299.36-3.593H2.75v-2.5h3.72l.55-5.5H3.75v-2.5h3.52l.38-3.892 2.99.299zm3.83 11.593l.55-5.5h-4.99l-.55 5.5h4.99z'
// const exploreSearchIconPath = 'M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'

const twitterBlue = 'rgb(29,155,240)'
const twitterGray = 'rgb(231,233,234)'

const linkMap: Record<string, string> = {
    'mask-icon': 'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg',
    // 'shortcut icon': '//abs.twimg.com/favicons/twitter.2.ico',
    'apple-touch-icon': 'https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png',
}
const metaMap: Record<string, string> = {
    'apple-mobile-web-app-title': 'Twitter',
}

const twitterFavicon = '//abs.twimg.com/favicons/twitter.2.ico'
const twitterFaviconWithDot = '//abs.twimg.com/favicons/twitter-pip.2.ico'

function main() {
    waitForElement('body').then(() => {
        doSyncColorScheme()
    })

    waitForElement('head').then(() => {
        injectStyle()
        monitorHead()
        monitorTitle()
    })
}

function syncColorScheme() {
    const bgColor = document.body.style.backgroundColor
    if (bgColor === '#FFFFFF' || bgColor === 'rgb(255, 255, 255)') {
        document.documentElement.setAttribute('data-color-scheme', 'light')
    }
    else if (bgColor === '#000000' || bgColor === 'rgb(0, 0, 0)') {
        document.documentElement.setAttribute('data-color-scheme', 'dark')
    }
    else if (bgColor === '#15202B' || bgColor === 'rgb(21, 32, 43)') {
        // document.documentElement.setAttribute('data-color-scheme', 'dim')
        document.documentElement.setAttribute('data-color-scheme', 'dark')
    }
    else {
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        document.documentElement.setAttribute('data-color-scheme', system)
    }
}

async function doSyncColorScheme() {
    syncColorScheme()
    const bodyStyleObserver = new MutationObserver(syncColorScheme)
    bodyStyleObserver.observe(document.body, { attributes: true })
}

function injectStyle() {
    const style = document.createElement('style')
    style.textContent = `
svg > g > path[d='${xIconPath}'],
svg > g > path[d='${xIconInNotificationPath}'] {
    d: path('${twitterBlueBirdIconPath}');
}

svg > g > path[d='${xHomeIconPath}'],
svg > g > path[d='${xHouseIconPath}'] {
    d: path('${twitterHomeIconPath}');
}

svg > g > path[d='${xHomeActiveIconPath}'],
svg > g > path[d='${xHouseActiveIconPath}'] {
    d: path('${twitterHomeActiveIconPath}');
}

a[aria-label="Premium"] svg > g > path {
    d: path('${twitterBlueIconPath}');
}

#placeholder > svg,
h1 a[href=\'/home\'] svg,
svg[data-testid="icon-verified"],
[data-testid="TopNavBar"] div:not([role="button"]) > div > svg,
[data-testid="cellInnerDiv"] svg > g > path[d='${xIconInNotificationPath}'] {
    color: ${twitterBlue};
}

[data-color-scheme="dark"] h1 a[href=\'/home\'] svg {
    color: ${twitterGray};
}

a[aria-label="Premium"] > div > div[dir] {
    text-overflow: clip;
}

a[aria-label="Premium"] > div > div[dir] > span {
    visibility: hidden;
}

a[aria-label="Premium"] > div > div[dir] > span:before {
    visibility: visible;
    content: "Twitter Blue";
}
`
    document.head.appendChild(style)
}

const mutationObserverOptions: MutationObserverInit = { subtree: true, characterData: true, childList: true, attributes: true }

async function waitForElement<T extends HTMLElement>(selector: string): Promise<T> {
    const el = document.querySelector<T>(selector)
    if (el) return el

    return new Promise((resolve) => {
        const fn = () => {
            const el = document.querySelector<T>(selector)
            if (el) {
                return resolve(el)
            }
            requestAnimationFrame(fn)
        }
        requestAnimationFrame(fn)
    })
}

function monitorHead() {
    const sync = () => {
        Object.entries(linkMap).forEach(([rel, targetValue]) => {
            const link = document.querySelector(`link[rel="${rel}"]`)
            if (link && link.getAttribute('href') !== targetValue) {
                link.setAttribute('href', targetValue)
            }
        })

        Object.entries(metaMap).forEach(([name, targetValue]) => {
            const meta = document.querySelector(`meta[name="${name}"]`)
            if (meta && meta.getAttribute('content') !== targetValue) {
                meta.setAttribute('content', targetValue)
            }
        })

        const shortcut = document.querySelector('link[rel="shortcut icon"]')
        if (shortcut) {
            const hasNotification = document.querySelector('a[data-testid="AppTabBar_Notifications_Link"] svg ~ div[aria-live="polite"]')
            const targetValue = hasNotification ? twitterFaviconWithDot : twitterFavicon
            if (shortcut.getAttribute('href') !== targetValue) {
                shortcut.setAttribute('href', targetValue)
            }
        }
    }
    sync()
    window.addEventListener('visibilitychange', sync)
    new MutationObserver(sync).observe(document.head, mutationObserverOptions)
}

async function monitorTitle() {
    const titleEl = await waitForElement('head > title')
    const sync = () => {
        const newTitle = document.title
            // Thread title
            .replace(/ on X:/, ' on Twitter:')
            // Thread title (zh-CN / zh-TW)
            .replace(/X 上的/, 'Twitter 上的')
            // X suffix
            .replace(/ \/ X$/, ' / Twitter')
            // Single X
            .replace(/^X$/, 'Twitter')
            // Single X with notification
            .replace(/^\((\d+)\) X$/, '($1) Twitter')

        if (newTitle !== document.title) document.title = newTitle
    }
    sync()
    window.addEventListener('visibilitychange', sync)
    new MutationObserver(sync).observe(titleEl, mutationObserverOptions)
}

main()
