import AbstractControl from './AbstractControl';
import PropTypes from 'prop-types';

class Compass extends AbstractControl {

	createControl(smap) {
		return new smap.constructor.Control.Compass({});
	}

}

Compass.propTypes = Object.assign({}, AbstractControl.propTypes, {
	left: PropTypes.number,
	top: PropTypes.number,
	bottom: PropTypes.number,
	right: PropTypes.number,
});

Compass.defaultProps = {
	left: 10,
	top: 10,
};

export default Compass;