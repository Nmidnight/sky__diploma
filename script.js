const basketWrapper = document.querySelector('.header__item-basket');
const basketCard = basketWrapper.querySelector('.basket__popup');

basketWrapper.addEventListener('mouseenter', () => {
  basketCard.style.display = 'block';
});

basketWrapper.addEventListener('mouseleave', () => {
  basketCard.style.display = 'none';
});



