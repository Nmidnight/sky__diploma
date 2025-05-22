const popup = document.querySelector('.pop_up');
const button = document.querySelector('.main__button-setting');

let isVisible = false;

document.querySelector('.main__select-item').addEventListener('click', function () {
  button.classList.toggle('active');
});

button.addEventListener('click', () => {
  if (!isVisible) {
    popup.classList.remove('pop_up--hiding');
    popup.classList.add('pop_up--visible');
    popup.style.display = 'block';
    isVisible = true;
  } else {
    popup.classList.remove('pop_up--visible');
    popup.classList.add('pop_up--hiding');

    popup.addEventListener('animationend', function handler() {
      popup.style.display = 'none';
      isVisible = false;
      popup.removeEventListener('animationend', handler);
    });
  }
});