//buttons
const buttons = ['Ford', 'Mitsubishi', 'Toyota', 'Mercedes']
const button = document.querySelector('.buttons')

const mapButtons = buttons.map((category)=>{
    return `<a href="href.html"><button class="filter-btn">${category}</button></a>`
}).join('')

button.innerHTML = mapButtons
//image swiper

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
// Optional parameters
loop: true,


// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
})