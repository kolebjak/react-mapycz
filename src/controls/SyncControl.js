import React from 'react';
import PropTypes from 'prop-types';

class SyncControl extends React.Component {
	static displayName = 'SyncControl'
	
	static contextTypes = {
		sMap: PropTypes.object,
	}
	
	constructor(props, context) {
		super(props, context);

		const sControl = new SMap.Control.Sync();
		context.sMap.addControl(sControl);
		this.sControl = sControl;
	}
	
	componentWillUnmount() {
		this.context.sMap.removeControl(this.sControl);
	}
	
	render() {
		return null;
	}
}

export default SyncControl;