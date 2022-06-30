let ul = document.querySelector('.ul__items')
let hamburguesa = document.querySelector('.nav__bar')



hamburguesa.addEventListener('click', ()=>{
    ul.classList.toggle('activado')
})