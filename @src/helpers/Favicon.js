

export function injectFavicon () {
    insertLink('shortcut icon', '32x32');
    insertLink('icon', '16x16');
}


function insertLink (rel, sizes) {

    const el = document.createElement('link');

    const attributes = { rel, sizes, href: `/favicon-${sizes}.png`, type: 'image/png' };
    for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
    }

    const title = document.head.getElementsByTagName('title')[0];
    title.parentElement.insertBefore(el, title);
}