import '../scss/main.scss';


const counterField = document.querySelector('.hydrapp__counter--js');
const addButton = document.querySelector('.button__add--js');
const lessButton = document.querySelector('.button__less--js');
const key = new Date().toLocaleString().slice(0, 10);

let currentValue = 0; 

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentValue = localStorageValue;

} else {
    localStorage.setItem(key, 0);
}

counterField.innerHTML = currentValue;

addButton.addEventListener('click', () => {
    currentValue++;
    counterField.innerHTML = currentValue;
    localStorage.setItem(key, currentValue);
});

lessButton.addEventListener('click', () => {
    if (currentValue > 0) {
        currentValue--;
    }
        counterField.innerHTML = currentValue;
        localStorage.setItem(key, currentValue);

});






// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');