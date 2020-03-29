console.log('It works!');
import { includeHTML } from './modules/includeHTML.js';
includeHTML();
import { initUpdateNavbarOnScroll } from './modules/navbarTransition.js';

document.addEventListener('turbolinks:load', () => {
	initUpdateNavbarOnScroll();
});
