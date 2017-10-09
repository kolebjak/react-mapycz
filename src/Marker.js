import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './MapPropTypes';

class Marker extends React.Component {
	
	static contextTypes = {
		sMap: PropTypes.object,
		sLayer: PropTypes.object,
	}

	static propTypes = {
		coords: MapPropTypes.coords.isRequired,
		title: PropTypes.string,
	}

	state = {
		sMarker: null,
	}

	constructor(props, context) {
		super(props, context);
		const {title, coords: [lat, lng]} = props,
			coords = SMap.Coords.fromWGS84(lng, lat);
		const sMarker = new SMap.Marker(coords, false, {
			title,
		});
		this.context.sLayer.addMarker(sMarker);
		this.state = {
			sMarker,
		};
	}

	componentWillUnmount() {
		this.context.sLayer.removeMarker(this.state.sMarker);
		this.setState({sMarker: null});
	}

	render() {
		return null;
	}
}

export default Marker;