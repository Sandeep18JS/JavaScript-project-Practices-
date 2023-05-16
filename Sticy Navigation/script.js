const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)


// offsetHeight means total height with padding ,margin ,border,
// everything in that nav div 
function fixNav(){
if(window.scrollY > nav.offsetHeight+150){
    nav.classList.add('active')
} else{
    nav.classList.remove('active')

}
}