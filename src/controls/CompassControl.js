import AbstractControl from './AbstractControl';
import PropTypes from 'prop-types';

class CompassControl extends AbstractControl {

	static propTypes = {
		left: PropTypes.number,
		top: PropTypes.number,
		bottom: PropTypes.number,
		right: PropTypes.number,
	}

	static defaultProps = {
		left: 10,
		top: 10,
	}

	createControl(sMap) {
		return new sMap.constructor.Control.CompassControl({});
	}

}

export default CompassControl;