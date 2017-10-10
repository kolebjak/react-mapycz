import React from 'react';
import PropTypes from 'prop-types';
import {componentConstruct, componentDidUpdate} from '../util/MapComponentHelper';

const configureMode = (sControl, prop, prevProp, props) => {
	const {pan, zoom} = props;
	let mode = 0;
	mode |= pan && SMap.KB_PAN;
	mode |= zoom && SMap.KB_ZOOM;
	
	sControl.configure(mode);
};

class KeyboardControl extends React.Component {
	static displayName = 'KeyboardControl'
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	static propTypes = {
		pan: PropTypes.bool,
		zoom: PropTypes.bool,
	}

	static defaultProps = {
		pan: true,
		zoom: true,
	}

	static updaterMap = {
		pan: configureMode,
		zoom: configureMode,
	}
	
	constructor(props, context) {
		super(props, context);
	
		const sControl = new SMap.Control.Keyboard();
		context.sMap.addControl(sControl);
		this.sControl = sControl;
		componentConstruct(props, sControl, KeyboardControl.updaterMap);
	}

	componentDidUpdate(props) {
		componentDidUpdate(this, this.sControl, KeyboardControl.updaterMap, props);
	}
	
	componentWillUnmount() {
		this.context.sMap.removeControl(this.sControl);
	}
	
	render() {
		return null;
	}

}

export default KeyboardControl; 