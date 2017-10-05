
/** Error reporters */
const errRequired = (propName, componentName) => new Error(`Missing required prop \`${propName}\` in \`${componentName}\`. Validation failed.`);
const errInvalid = (propName, componentName) => new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`);

const isNumber = (val) => !isNaN(val);

const isInteger = (val) => isNumber(val) && val | 0 === val;

const isInRange = (min, max) => (val) => isNumber(val) && val >= min && val <= max;

/**
 * Checks whether any value is passed and if so, performs type validation.
 * @param {function} anotherCheck 
 * @returns {?Error}
 */
const checkRequired = (anotherCheck) => (props, propName, componentName = 'ANONYMOUS') => {
	if (props[propName] === undefined) {
		return errRequired(propName, componentName);
	}
	return anotherCheck(props, propName, componentName);
};

/**
 * An integer between 1 and 18 (included).
 * @param {Object} props 
 * @param {string} propName 
 * @param {?string} componentName 
 * @returns {?Error}
 */
const zoom = (props, propName, componentName = 'ANONYMOUS') => {
	const val = props[propName];
	if (val !== undefined && !(isInteger(val) && isInRange(1, 18)(val))) {
		return errInvalid(propName, componentName);
	}
};
zoom.isRequired = checkRequired(zoom);


/**
 * Geographical coordinates, an array where both items are floats.
 * [< -90, 90 >, < -180, 180 >]
 * @param {Object} props 
 * @param {string} propName 
 * @param {?string} componentName 
 * @returns {?Error}
 */
const coords = (props, propName, componentName = 'ANONYMOUS') => {
	const val = props[propName];
	if (val !== undefined) {
		if (!Array.isArray(val) || val.length !== 2) {
			return errInvalid(propName, componentName);
		}
		const [lat, lng] = val;
		if (!isInRange(-90, 90)(lat) || !isInRange(-180, 180)(lng)) {
			return errInvalid(propName, componentName);
		}
	}
};
coords.isRequired = checkRequired(coords);


const MapPropTypes = {
	zoom,
	coords,
};

export default MapPropTypes;