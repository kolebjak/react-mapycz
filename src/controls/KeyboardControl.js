import PropTypes from 'prop-types';
import MapControl from './MapControl';

class KeyboardControl extends MapControl {
	static displayName = 'KeyboardControl'

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
		return new SMap.Control.Keyboard(mode);
	}

	resolveMode() {
		const {allowPan, allowZoom} = this.props;
		let mode = 0;
		if (allowPan) {
			mode |= SMap.KB_PAN;
		}
		if (allowZoom) {
			mode |= SMap.KB_ZOOM;
		}
		return mode;
	}

}

export default KeyboardControl; 