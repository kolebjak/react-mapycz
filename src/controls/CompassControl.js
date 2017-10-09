import MapControl from './MapControl';
import PropTypes from 'prop-types';

class CompassControl extends MapControl {
	static displayName = 'CompassControl'

	static propTypes = {
		title: PropTypes.string,
		left: PropTypes.number,
		top: PropTypes.number,
		bottom: PropTypes.number,
		right: PropTypes.number,
	}

	static defaultProps = {
		title: 'Posun mapy',
		left: 10,
		top: 10,
	}

	createControl() {
		const {title} = this.props;
		return new SMap.Control.Compass({
			title,
		});
	}

}

export default CompassControl;