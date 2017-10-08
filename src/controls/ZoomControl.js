import PropTypes from 'prop-types';
import AbstractControl from './AbstractControl';

class ZoomControl extends AbstractControl {

	static propTypes = {
		showZoomMenu: PropTypes.bool,
		left: PropTypes.number,
		top: PropTypes.number,
		bottom: PropTypes.number,
		right: PropTypes.number,
	}

	static defaultProps = {
		right: 10,
		top: 10,
		showZoomMenu: false,
	}

	createControl(sMap) {
		return new sMap.constructor.Control.Zoom();
	}

}

export default ZoomControl;