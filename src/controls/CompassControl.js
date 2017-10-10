import React from 'react';
import PropTypes from 'prop-types';
import {componentConstruct, componentDidUpdate} from '../util/MapComponentHelper';
import {positionUpdater, domAttrUpdater} from '../util/Updaters';

class CompassControl extends React.Component {
	static displayName = 'CompassControl'
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

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

	static updaterMap = {
		title: domAttrUpdater('title'),
		left: positionUpdater('left'),
		right: positionUpdater('right'),
		top: positionUpdater('top'),
		bottom: positionUpdater('bottom'),
	}

	constructor(props, context) {
		super(props, context);

		const sControl = new SMap.Control.Compass();
		context.sMap.addControl(sControl);
		this.sControl = sControl;
		componentConstruct(props, sControl, CompassControl.updaterMap);
	}
	
	componentDidUpdate(props) {
		componentDidUpdate(this, this.sControl, CompassControl.updaterMap, props);
	}

	componentWillUnmount() {
		this.context.sMap.removeControl(this.sControl);
	}

	render() {
		return null;	
	}

}

export default CompassControl;