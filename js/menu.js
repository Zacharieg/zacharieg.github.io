export default () => {
    const sectionData = {}
    const sections = document.querySelectorAll('.section')

    sections.forEach(c => {
        createNewItem(c)
    });

    window.addEventListener("scroll", function (event) {
        let scroll = this.scrollY;

        adaptScroll(scroll)
    });

    document.querySelector('.action-expand').addEventListener('click', () => {
        let menu = document.querySelector('.menu')
        let expandButtonImage = document.querySelector('.expand-menu i')
        if (menu.classList.contains("expanded")) {
            expandButtonImage.setAttribute('class', 'ri-menu-2-fill')
            menu.classList.remove("expanded")
        } else {
            expandButtonImage.setAttribute('class', 'ri-close-fill')
            menu.classList.add("expanded")
        }
    })

    document.querySelector(".contact").addEventListener("click", () => {
        document.querySelector(".popin-contact-back").setAttribute("style", "display:block")
        setTimeout(() => {
            document.querySelector(".popin-contact-back").classList.add("show")
        }, 20);
    })

    document.querySelector(".popin-contact .croix").addEventListener("click", () => {
        document.querySelector(".popin-contact-back").classList.remove("show")
        document.querySelector(".popin-contact-back").setAttribute("style", "display:none")
    })

    document.querySelectorAll(".info").forEach(elem => {
        let text = elem.querySelector('p').innerHTML.replaceAll(' ', '')

        elem.addEventListener("click", () => {
            document.execCommand('copy')
            elem.querySelector('span').setAttribute('style', 'opacity:1')
            setTimeout(() => {
                elem.querySelector('span').setAttribute('style', '')
            }, 2000);
        })

        elem.addEventListener("copy", (event) => {
            event.preventDefault();
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", text);
                elem.querySelector('span').setAttribute('style', 'opacity:1')
                setTimeout(() => {
                    elem.querySelector('span').setAttribute('style', '')
                }, 2000);
            }
        })
    })

    function adaptScroll(scroll) {

        if (scroll < 150) {
            clearSelectionItem()
        } else {
            const section = getSectionMoreSeen()
            if (section != null) {
                const sectionId = section.getAttribute('id')
                selectItem(sectionId)
            } else {
                clearSelectionItem()
            }
        }
    }

    function selectItem(sectionId) {
        let item = sectionData[sectionId].item
        clearSelectionItem()
        item.classList.add("checked")
    }

    function clearSelectionItem() {
        document.querySelectorAll(".menu-section-item").forEach(i => { i.classList.remove("checked") })
    }

    function createNewItem(section) {
        let name = section.getAttribute('data-title')

        let id = section.getAttribute('id')

        let item = document.querySelector(".template-menu-section-item").cloneNode(true)

        item.classList.remove("template-menu-section-item")
        item.classList.add("menu-section-item")
        item.querySelector(".menu-section-title").innerHTML = name
        document.querySelector(".menu-section-list").appendChild(item)

        item.querySelector(".menu-section-link").addEventListener('click', () => {
            selectItem(id)
        })

        sectionData[id] = {
            name: name,
            item: item
        }

        item.addEventListener('click', () => {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth',
            })
        })

        return id
    }

    function getSectionMoreSeen() {
        let sections = document.querySelectorAll(".section")

        let sectionMoreSeen = null
        let maxSurf = 0 
        sections.forEach(c => {
            
            let surface = getSurfaceOnScreen(c)

            if (surface > maxSurf) {
                sectionMoreSeen = c
                maxSurf = surface
            }
        })

        return sectionMoreSeen
    }

    function getSurfaceOnScreen(elem) {
        let viewportHeight = window.innerHeight;
        let scrollTop = window.scrollY;

        let elementOffsetTop = elem.offsetTop;
        let elementHeight = elem.offsetHeight;

        let surface = elementHeight
            - Math.max(0, scrollTop - elementOffsetTop)
            - Math.max(0, (elementOffsetTop + elementHeight) - (scrollTop + viewportHeight)) 

        return surface
    }

    //Initialisation

    adaptScroll(window.scrollY);
}