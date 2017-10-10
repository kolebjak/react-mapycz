import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './MapPropTypes';
import {componentConstruct, componentDidUpdate} from './util/MapComponentHelper';

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

	static updaterMap = {
		coords(sMarker, [lat, lng]) {
			sMarker.setCoords(SMap.Coords.fromWGS84(lng, lat));
		},

		title(sMarker, title) {
			sMarker._dom.active.setAttribute('title', title);
		},

		imageUrl(sMarker, imageUrl) {
			sMarker.setURL(imageUrl);
		},

		width(sMarker, width) {
			sMarker._dom.active.style.width = `${width}px`;
		},

		height(sMarker, height) {
			sMarker._dom.active.style.height = `${height}px`;
		},

		anchor(sMarker, [left, top]) {
			sMarker._options.anchor = {left, top};
			sMarker._owner && sMarker._owner.positionMarker(sMarker);
		},
	}

	constructor(props, context) {
		super(props, context);
		const {coords: [lat, lng]} = props,
			coords = SMap.Coords.fromWGS84(lng, lat);

		const sMarker = new SMap.Marker(coords, false);

		componentConstruct(props, sMarker, Marker.updaterMap);
		this.context.sLayer.addMarker(sMarker);
		this.sMarker = sMarker;
	}

	componentDidUpdate(prevProps) {
		componentDidUpdate(this, this.sMarker, Marker.updaterMap, prevProps);
	}

	componentWillUnmount() {
		this.context.sLayer.removeMarker(this.sMarker);
	}

	render() {
		return null;
	}
}

export default Marker;