const container = document.querySelector('.container')
const imgSplash = "https://source.unsplash.com/random"
const rows = 5

for(i = 0; i<rows*3;i++){
    const img = document.createElement('img')
    img.src=`${imgSplash}${getrandomSize()}`
    container.appendChild(img)
}

function getrandomSize(){
    `return ${getrandomNr()}x${getrandomNr()}`
}

function getrandomNr(){
    return Math.floor(Math.random()*10)+300

}