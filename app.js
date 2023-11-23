let priceElements = document.querySelectorAll('#price');
let circleButton = document.querySelector('.circle');
let isAnnually = true;

circleButton.addEventListener('click', () => {
    circleButton.classList.toggle('rotate');

    priceElements.forEach(priceElement => {
        let currentPrice = Number(priceElement.innerHTML);
        if (isAnnually) {
            currentPrice *= 10;
        } else {
            currentPrice /= 10; 
        }
        priceElement.innerHTML = currentPrice.toFixed(2);
    });

    isAnnually = !isAnnually; 
});
