import '../scss/main.scss';


const counterField = document.querySelector('.counter--js');
const addButton = document.querySelector('.button__add--js');
const lessButton = document.querySelector('.button__less--js');
const key = new Date().toLocaleString().slice(0, 10);
let currentValue = 0; 
const localStorageValue = localStorage.getItem(key);
const updateCounter = () => {
    counterField.innerHTML = currentValue;
    localStorage.setItem(key, currentValue);
} 

if (localStorageValue) {
    currentValue = localStorageValue;

} else {
    localStorage.setItem(key, 0);
}

counterField.innerHTML = currentValue;

addButton.addEventListener('click', () => {
    if (currentValue < 99) {
    currentValue++; 
    updateCounter();

}
if (currentValue > 98) {
    alert("Seems you are well hydrated");
}
   
});

lessButton.addEventListener('click', () => {
    if (currentValue > 0) {
        currentValue--;
        updateCounter();
    }

});



// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

