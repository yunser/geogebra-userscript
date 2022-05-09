// console.log('yunser-geogebra userscript load')

window.addEventListener('keydown', e => {
    // console.log('mousedown', e.code, e)
    // console.log('activeElement', document.activeElement.nodeName)
    // console.log('flow 0')
    if (e.code == 'KeyZ' && e.metaKey) {
        // console.log('flow 1')
        if (document.activeElement.nodeName != 'INPUT' && document.activeElement.nodeName != 'TEXTAREA') {
            // console.log('flow 2')
            unsafeWindow.ggbApplet.undo()

            // 方法 2
            // document.querySelector('button[aria-label="撤消"]')?.click()
            // document.querySelector('[data-filter-id="56"]')?.click()

            // 方法 3
            // const undoElem = document.querySelector('button[aria-label="撤消"]')
            // const event = new Event('click');
            // undoElem.dispatchEvent(event);
        }
    }
})
