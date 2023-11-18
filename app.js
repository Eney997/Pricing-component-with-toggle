let price = document.querySelectorAll('#price');
let cir = document.querySelectorAll('.circle');

let price2 = 10;

for (let i = 0; i < cir.length; i++) {
    cir[i].addEventListener('click', () => {
        cir[i].classList.toggle('rotate');
      
        for (let j = 0; j < price.length; j++) {
           let currentPrice = Number(price[j].innerHTML);
           
           if (price2 <= currentPrice) {
               currentPrice *= 10;
           }
           else {
               currentPrice /= 10;
           }
           price[j].innerHTML = currentPrice.toFixed(1);
        }
    });
}
