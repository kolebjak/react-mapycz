import React from 'react';
import PropTypes from 'prop-types';
import {componentConstruct, componentDidUpdate} from '../util/MapComponentHelper';
import {positionUpdater} from '../util/Updaters';

class ZoomControl extends React.Component {
	static displayName = 'ZoomControl'

	static contextTypes = {
		sMap: PropTypes.object,
	}

	static propTypes = {
		labels: PropTypes.object,
		title: PropTypes.arrayOf(PropTypes.string),
		showZoomMenu: PropTypes.bool,
		sliderHeight: PropTypes.number,

		left: PropTypes.number,
		top: PropTypes.number,
		bottom: PropTypes.number,
		right: PropTypes.number,
	}
	
	static defaultProps = {
		showZoomMenu: true,
		labels: {},
		title: ['Přiblížit', 'Oddálit'],

		right: 10,
		top: 10,
	}
	
	static updaterMap = {
		left: positionUpdater('left'),
		right: positionUpdater('right'),
		top: positionUpdater('top'),
		bottom: positionUpdater('bottom'),

		title(sControl, [inTitle, outTitle]) {
			const {plus, minus} = sControl._dom;
			plus.setAttribute('title', inTitle);
			minus.setAttribute('title', outTitle);
		},

		showZoomMenu(sControl, bool) {
			sControl._options.showZoomMenu = bool;
			bool ? sControl.addZoomMenu() : sControl.removeZoomMenu();
		},

		labels(sControl, labels) {
			sControl._labels = labels;
			sControl.removeZoomMenu();
			if (sControl._options.showZoomMenu) {
				sControl.addZoomMenu();
			}
		},
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

	constructor(props, context) {
		super(props, context);

		const sControl = new SMap.Control.Zoom();
		context.sMap.addControl(sControl);
		this.sControl = sControl;
		componentConstruct(props, sControl, ZoomControl.updaterMap);
	}
	
	componentDidUpdate(props) {
		componentDidUpdate(this, this.sControl, ZoomControl.updaterMap, props);
	}

	componentWillUnmount() {
		this.context.sMap.removeControl(this.sControl);
	}

	render() {
		return null;	
	}

}

export default ZoomControl;