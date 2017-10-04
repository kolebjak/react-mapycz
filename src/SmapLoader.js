
const API_SCRIPT_ID = '_apiMapyCzScript';

const scriptLoaded = (resolve) => () => {
	Loader.async = true;
	Loader.load(null, {}, () => {
		resolve(window.SMap);
	});
};

const SMapLoader = new Promise((resolve, reject) => {
	if (typeof(document) === 'undefined') {
		reject();
	}
	if (!document.getElementById(API_SCRIPT_ID) || !window.SMap) {
		const scriptElement = document.createElement('script');
		scriptElement.setAttribute('src', 'https://api.mapy.cz/loader.js');
		scriptElement.setAttribute('id', API_SCRIPT_ID);
		scriptElement.addEventListener('load', scriptLoaded(resolve));
		document.head.appendChild(scriptElement);
		return;
	}
	resolve(window.SMap);
});

export default SMapLoader;