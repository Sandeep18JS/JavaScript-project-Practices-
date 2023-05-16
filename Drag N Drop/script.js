const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()

}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    // we shoud add space before classes that we are adding in js,
    // for predefined classes in html no need for space 

}

function dragLeave() {
    this.className = 'empty'

}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)

}