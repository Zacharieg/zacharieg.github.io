import menu from './js/menu.js';
import parallax from './js/parallax.js';
import formes from './js/formes3D.js';
import i18n from '/js/i18n.js';
import sal from 'sal.js'

i18n();
parallax();
menu();
formes();
sal();

window.addEventListener('load', () => {
    document.querySelector("body").classList.remove("preload");
    document.querySelector("#preloader").classList.add("is-hidden");
    setTimeout(() => document.querySelector("#preloader").remove(), 1000);
});

const years = Math.abs(Math.round((new Date().getTime() - new Date(2000, 14, 3).getTime()) / (1000 * 60 * 60 * 24 * 365.25)));
//document.querySelector('#age').innerHTML = years;