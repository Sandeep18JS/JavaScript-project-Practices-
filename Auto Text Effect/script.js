const textE1 = document.getElementById('text')
const speedE1 = document.getElementById('speed')
const mytext = "oh yeah babe yes yes yes"
let idx = 1
let myspeed = 300/speedE1.value

writetext()

function writetext(){
textE1.innerText = mytext.slice(0,idx)
idx++
if(idx>mytext.length){
idx=1
}
setTimeout(writetext,myspeed)
}

speedE1.addEventListener('input',(e)=> myspeed=300/e.target.value)