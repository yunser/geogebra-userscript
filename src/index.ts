// console.log('yunser-geogebra userscript load')

window.addEventListener('keydown', e => {
    if (e.code == 'KeyZ' && e.metaKey) {
        if (document.activeElement.nodeName != 'INPUT' && document.activeElement.nodeName != 'TEXTAREA') {
            // 方法 1，利用网站暴露的全局变量和方法
            unsafeWindow.ggbApplet.undo()

            // 方法 2，模拟点击
            // document.querySelector('button[aria-label="撤消"]')?.click()

            // 方法 3，利用事件来模拟点击
            // const undoElem = document.querySelector('button[aria-label="撤消"]')
            // const event = new Event('click');
            // undoElem.dispatchEvent(event);
        }
    }
})
