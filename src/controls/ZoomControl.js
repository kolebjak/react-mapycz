import PropTypes from 'prop-types';
import MapControl from './MapControl';

class ZoomControl extends MapControl {
	static displayName = 'ZoomControl'

	static propTypes = {
		labels: PropTypes.object,
		title: PropTypes.arrayOf(PropTypes.string),
		showZoomMenu: PropTypes.bool,

		left: PropTypes.number,
		top: PropTypes.number,
		bottom: PropTypes.number,
		right: PropTypes.number,
	}

	static DEFAULT_LABELS = {
		2:  'Svět',
		5:  'Státy',
		8:  'Kraje',
		11: 'Města',
		14: 'Obce',
		17: 'Ulice',
		20: 'Domy',
		21: 'Ptačí pohled',
	}

	static defaultProps = {
		showZoomMenu: true,
		labels: {},
		sliderHeight: 16,
		title: ['Přiblížit', 'Oddálit'],

		right: 10,
		top: 10,
	}

	createControl(sMap) {
		const {labels, title, showZoomMenu} = this.props;
		
		return new sMap.constructor.Control.Zoom(labels, {
			titles: title,
			showZoomMenu,
		});
	}

}

export default ZoomControl;