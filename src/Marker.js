import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './util/MapPropTypes';

class Marker extends React.Component {

	static contextTypes = {
		sMap: PropTypes.object,
		sLayer: PropTypes.object,
	}

	static propTypes = {
		coords: MapPropTypes.coords.isRequired,
		imageUrl: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		anchor: PropTypes.arrayOf(PropTypes.number),
		title: PropTypes.string,
	}

	constructor(props, context) {
		super(props, context);
		const {coords: [lat, lng]} = props, coords = SMap.Coords.fromWGS84(lng, lat);

		const sMarker = new SMap.Marker(coords, false);

		this.context.sLayer.addMarker(sMarker);
		this.sMarker = sMarker;
	}

	componentWillUnmount() {
		this.context.sLayer.removeMarker(this.sMarker, true);
	}

	render() {
		return null;
	}
}

export default Marker;