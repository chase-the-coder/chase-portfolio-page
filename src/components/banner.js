import Typed from 'typed.js';

const loadDynamicBannerText = () => {
	new Typed('#banner-typed-text', {
		strings: [ 'helo' ],
		typeSpeed: 50,
		loop: false
	});
};

export { loadDynamicBannerText };
