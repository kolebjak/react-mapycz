import React from 'react';
import PropTypes from 'prop-types';

class Path extends React.Component {

	static contextTypes = {
		sMap: PropTypes.object,
		sLayer: PropTypes.object,
	}

	static propTypes = {
		coords: PropTypes.any,
	}

	constructor(props, context) {
		super(props, context);

		var points1 = [];
		if(props.coords) {
			points1 = props.coords.map(p => SMap.Coords.fromWGS84(p.lng, p.lat));
		}

		var options1 = {
			color: '#f00', // TODO: color by difficulty / type?
			width: 3,
		};

		const polyline = new SMap.Geometry(SMap.GEOMETRY_POLYLINE, null, points1, options1);
		this.context.sLayer.addGeometry(polyline);
	}

	render() {
		return null;
	}
}

export default Path;