export default () => {
    document.querySelectorAll('.card-3D').forEach(c => {
        c.addEventListener('mousemove', (e) => {
            let mousePos = getMousePosOnElemCentered(c, e.pageX, e.pageY)
            let maxRotate = 20

            let ax = -mousePos.x * maxRotate
            let ay = mousePos.y * maxRotate
            
            c.setAttribute("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg) translateZ(-1px);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg) translateZ(-1px);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg) translateZ(-1px)");
        })
    })

    function getMousePosOnElemCentered(elem, pageX, pageY) {

        let globalPos = getGlobal(elem)

        return {
            x: (pageX - globalPos.left - elem.offsetWidth/2)/elem.offsetWidth,
            y: (pageY - globalPos.top - elem.offsetHeight/2)/elem.offsetHeight
        }
    }

    function getGlobal(elem) {
        var top = 0
        var left = 0
        do {
            top += elem.offsetTop
            left += elem.offsetLeft
            elem = elem.offsetParent;
        } while (elem)
        return {
            top : top,
            left : left
        }
    }
}