import React from 'react';
import PropTypes from 'prop-types';
import {componentConstruct, componentDidUpdate} from '../util/MapComponentHelper';

const configureMode = (sControl, prop, prevProp, props) => {
	const {pan, wheel, zoom} = props;
	let mode = 0;
	mode |= pan && SMap.MOUSE_PAN;
	mode |= zoom && SMap.MOUSE_ZOOM;
	mode |= wheel && SMap.MOUSE_WHEEL;
	
	sControl.configure(mode);
};

class MouseControl extends React.Component {
	static displayName = 'MouseControl'
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	static propTypes = {
		pan: PropTypes.bool,
		wheel: PropTypes.bool,
		zoom: PropTypes.bool,
	}

	static defaultProps = {
		pan: true,
		wheel: true,
		zoom: true,
	}

	static updaterMap = {
		pan: configureMode,
		wheel: configureMode,
		zoom: configureMode,
	}
	
	constructor(props, context) {
		super(props, context);
	
		const sControl = new SMap.Control.Mouse();
		context.sMap.addControl(sControl);
		this.sControl = sControl;
		componentConstruct(props, sControl, MouseControl.updaterMap);
	}

	componentDidUpdate(props) {
		componentDidUpdate(this, this.sControl, MouseControl.updaterMap, props);
	}
	
	componentWillUnmount() {
		this.context.sMap.removeControl(this.sControl);
	}

	render() {
		return null;
	}

}

export default MouseControl; 