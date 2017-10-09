import React from 'react';
import PropTypes from 'prop-types';

class MarkerLayer extends React.Component {
	
	static contextTypes = {
		sMap: PropTypes.object,
	}

	static childContextTypes = {
		sMap: PropTypes.object,
		sLayer: PropTypes.object,
	}

	static propTypes = {
		children: PropTypes.node,
		isEnabled: PropTypes.bool,
	}

	static defaultProps = {
		isEnabled: true,
	}

	state = { 
		sLayer: null,
	}

	constructor(props, context) {
		super(props, context);

		const sLayer = new SMap.Layer.Marker();
		this.context.sMap.addLayer(sLayer);

		if (this.props.isEnabled) {
			sLayer.enable();
		}

		this.state = {
			sLayer,
		};
	}
		
	getChildContext() {
		return {
			...this.context,
			sLayer: this.state.sLayer,
		};
	}

	componentWillUnmount() {
		if (this.state.sLayer) {
			this.context.sMap.removeLayer(this.state.sLayer);
			this.setState({sLayer: null});
		}
	}
	

	render() {
		return <div>{this.props.children}</div>;
	}

}

export default MarkerLayer;