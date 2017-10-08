import React from 'react';
import PropTypes from 'prop-types';

class AbstractControl extends React.Component {
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	state = {
		sControl: null,
	}

	createControl(/* sMap, props */) {
		throw new Error('Unimplemented method createControl');
	}

	componentDidMount() {
		if (!this.state.sControl) {
			const sControl = this.createControl(this.context.sMap, this.props);
			this.context.sMap.addControl(sControl, this.props);
			this.setState({sControl});
		}
	}

	componentWillUnmount() {
		this.context.sMap.removeControl(this.state.sControl);
		this.setState({sControl: null});
	}

	render() {
		return null;
	}
}

export default AbstractControl;