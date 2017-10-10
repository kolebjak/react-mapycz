
const positionUpdater = (direction, domElement = 'container') => (sInstance, prop) => {
	sInstance._dom[domElement].style[direction] = `${prop}px`;
};

const domAttrUpdater = (attr, domElement = 'container') => (sInstance, prop) => {
	sInstance._dom[domElement].setAttribute(attr, prop);
};

export {
	positionUpdater,
	domAttrUpdater,
};