const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', () => {

const trimElement = inputElement.value.trim();

if (trimElement === '') {
    outputElement.textContent = 'Anonymous';
} else {
    outputElement.textContent = trimElement;
}
});