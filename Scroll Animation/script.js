const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
//  triggernottom concept
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
// topBox concept
    boxes.forEach(box => {
        const topBox = box.getBoundingClientRect().top


        if (topBox < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }

    })
}