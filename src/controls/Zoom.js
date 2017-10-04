import PropTypes from 'prop-types';
import AbstractControl from './AbstractControl';

class Zoom extends AbstractControl {

	createControl(smap) {
		return new smap.constructor.Control.Zoom();
	}

}

Zoom.propTypes = Object.assign({}, AbstractControl.propTypes, {
	showZoomMenu: PropTypes.bool,
	left: PropTypes.number,
	top: PropTypes.number,
	bottom: PropTypes.number,
	right: PropTypes.number,
});

Zoom.defaultProps = Object.assign({}, AbstractControl.defaultProps, {
	right: 10,
	top: 10,
	showZoomMenu: false,
});

export default Zoom;