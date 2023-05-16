const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})

// const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(function(toggle) {
//   toggle.addEventListener('click', function() {
//     toggle.parentNode.classList.toggle('active');
//   });
// });
