import sentinel from 'sentinel-js'
import { onloadSafe } from './utils'

const xIconSvgInner = '<g><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"></path></g>'

const xIconInNotification = '<g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>'

const twitterIconSvgInner = '<g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g>'

// const twitterIconSvg = `<svg data-replaced="true" viewBox="0 0 24 24" aria-hidden="true" class="r-k200y r-1cvl2hr r-4qtqp9 r-yyyyoo r-eu3ka r-dnmrzs r-bnwqim r-1plcrui r-lrvibr old-twitter-icon">${twitterIconSvgInner}</svg>`

const linkMap: Record<string, string> = {
    'mask-icon': 'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg',
    'shortcut icon': '//abs.twimg.com/favicons/twitter.2.ico',
    'apple-touch-icon': 'https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png',
}
const metaMap: Record<string, string> = {
    'apple-mobile-web-app-title': 'Twitter',
}

function main() {
    onloadSafe(() => {
        injectStyle()

        const placeHolderIconSelector = '#placeholder > svg'
        replaceIcon(placeHolderIconSelector, false)

        const headerIconSelector = 'h1 a[href=\'/home\'] svg'
        replaceIcon(headerIconSelector, true)

        const mobileHeaderIconSelector = '[data-testid="TopNavBar"] svg'
        replaceIcon(mobileHeaderIconSelector, true)

        // Fuzzy matching for all 𝕏 icons
        sentinel.on('svg', (svg) => {
            if (svg.getAttribute('data-replaced') === 'true') return
            svg.setAttribute('data-replaced', 'true')

            if (svg.innerHTML === xIconSvgInner) svg.innerHTML = twitterIconSvgInner
            if (svg.innerHTML === xIconInNotification) svg.innerHTML = twitterIconSvgInner
        })

        replaceLinkRel()
        replaceMetaName()
    })
}

function injectStyle() {
    const sheet = new CSSStyleSheet()
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
}

@media (prefers-color-scheme: dark) {
    .old-twitter-icon {
        color: rgba(231,233,234,1.00);
    }
}`)
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
}

function replaceIcon(selector: string, applyStyle: boolean) {
    sentinel.on(selector, (svg) => {
        if (svg.getAttribute('data-replaced') === 'true') return
        svg.setAttribute('data-replaced', 'true')

        svg.innerHTML = twitterIconSvgInner
        if (applyStyle) svg.classList.add('old-twitter-icon')
    })
}

const mutationObserverOptions = { subtree: true, characterData: true, childList: true }

function replaceLinkRel() {
    const links = document.querySelectorAll<HTMLAnchorElement>('link[rel]')
    links.forEach((link) => {
        const rel = link.getAttribute('rel')
        if (rel && linkMap[rel]) {
            const targetValue = linkMap[rel]
            const sync = () => {
                if (link.getAttribute('href') !== targetValue) {
                    link.setAttribute('href', targetValue)
                }
            }
            sync()
            window.addEventListener('visibilitychange', sync)
            new MutationObserver(sync).observe(link, mutationObserverOptions)
        }
    })
}

function replaceMetaName() {
    const metaList = document.querySelectorAll<HTMLMetaElement>('meta[name]')
    metaList.forEach((meta) => {
        const name = meta.getAttribute('name')
        if (name && metaMap[name]) {
            const targetValue = metaMap[name]
            const sync = () => {
                if (meta.getAttribute('content') !== targetValue) {
                    meta.setAttribute('content', targetValue)
                }
            }
            sync()
            window.addEventListener('visibilitychange', sync)
            new MutationObserver(sync).observe(meta, mutationObserverOptions)
        }
    })
}

main()
