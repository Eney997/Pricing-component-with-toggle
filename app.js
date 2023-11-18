let price = document.querySelectorAll('#price')
let cir = document.querySelectorAll('.circle')

for (let i = 0;i < cir.length;i++){
    cir[i].addEventListener('click', () =>{
        cir[i].classList.toggle('rotate') 
    })
}
