import PropTypes from 'prop-types';
import AbstractControl from './AbstractControl';

class KeyboardControl extends AbstractControl {

	static propTypes = {
		allowPan: PropTypes.bool,
		allowZoom: PropTypes.bool,
	}

	static defaultProps = {
		allowPan: true,
		allowZoom: true,
	}

	createControl() {
		const mode = this.resolveMode();
		return new window.SMap.Control.Keyboard(mode);
	}

	resolveMode() {
		const {allowPan, allowZoom} = this.props;
		let mode = 0;
		if (allowPan) {
			mode |= window.SMap.MOUSE_PAN;
		}
		if (allowZoom) {
			mode |= window.SMap.MOUSE_ZOOM;
		}
		return mode;
	}

}

export default KeyboardControl; 