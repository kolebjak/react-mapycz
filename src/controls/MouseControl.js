import PropTypes from 'prop-types';
import AbstractControl from './AbstractControl';

class MouseControl extends AbstractControl {

	static propTypes = {
		allowPan: PropTypes.bool,
		allowWheel: PropTypes.bool,
		allowZoom: PropTypes.bool,
	}

	static defaultProps = {
		allowPan: true,
		allowWheel: true,
		allowZoom: true,
	}

	createControl() {
		const mode = this.resolveMode();
		return new window.SMap.Control.Mouse(mode);
	}

	resolveMode() {
		const {allowPan, allowWheel, allowZoom} = this.props;
		let mode = 0;
		if (allowPan) {
			mode |= window.SMap.MOUSE_PAN;
		}
		if (allowWheel) {
			mode |= window.SMap.MOUSE_WHEEL;
		}
		if (allowZoom) {
			mode |= window.SMap.MOUSE_ZOOM;
		}
		return mode;
	}

}

export default MouseControl; 