import React from 'react';
import PropTypes from 'prop-types';

class ControlPane extends React.Component {
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	static propTypes = {
		children: PropTypes.node,
	}

	render() {
		return <div>{this.props.children}</div>;
	}

}

export default ControlPane;