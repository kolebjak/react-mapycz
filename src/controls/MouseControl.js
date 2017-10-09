import PropTypes from 'prop-types';
import MapControl from './MapControl';

class MouseControl extends MapControl {
	static displayName = 'MouseControl'

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
		return new SMap.Control.Mouse(mode);
	}

	resolveMode() {
		const {allowPan, allowWheel, allowZoom} = this.props;
		let mode = 0;
		if (allowPan) {
			mode |= SMap.MOUSE_PAN;
		}
		if (allowWheel) {
			mode |= SMap.MOUSE_WHEEL;
		}
		if (allowZoom) {
			mode |= SMap.MOUSE_ZOOM;
		}
		return mode;
	}

}

export default MouseControl; 