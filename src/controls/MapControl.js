import React from 'react';
import PropTypes from 'prop-types';

class MapControl extends React.Component {
	static displayName = 'MapControl'
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	constructor(props, context) {
		super(props, context);
		const {sMap} = context;

		const sControl = this.createControl(sMap, props);
		sMap.addControl(sControl, props);
		this.state = {
			sControl,
		};
	}

	createControl() {
		throw new Error('Unimplemented method `createControl`.');
	}

	componentWillUnmount() {
		this.context.sMap.removeControl(this.state.sControl);
	}

	render() {
		return null;
	}
}

export default MapControl;