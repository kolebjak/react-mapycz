import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './MapPropTypes';
import SmapLoader from './SmapLoader';
const MAP_ID_PREFIX = '_map-component-';

class Map extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.mapId = MAP_ID_PREFIX + Map.COUNTER++;
		this.state = {smap: null};
	}

	componentDidMount() {
		SmapLoader.then(this.initiateMap.bind(this));
	}

	initiateMap(SMap) {
		const {zoom, centerCoords} = this.props,
			[lat, lng] = centerCoords,
			center = SMap.Coords.fromWGS84(lng, lat);

		const smap = new SMap(document.getElementById(this.mapId), center, zoom);
		smap.addDefaultLayer(SMap[Map.LayerIds[this.props.layer]]).enable();
		smap.getSignals().addListener(window, '*', this.handleSignals.bind(this));
		this.setState({smap});
	}

	componentDidUpdate() {
	}

	handleSignals(eventObj) {
		if (eventObj.type === 'zoom-start') {
			this.props.onZoomStart(eventObj);
		}
	}

	render() {
		const {width, height, children} = this.props;
		return (
			<div style={{width, height}} id={this.mapId}>
				{React.Children.map(children, (child, idx) => React.cloneElement(child, {smap: this.state.smap, key: child.type.name + idx}))}
			</div>
		);
	}
}

Map.COUNTER = 1;

Map.LayerIds = {
	TOURIST: 'DEF_TURIST',
	PHOTO: 'DEF_OPHOTO',
	BASE: 'DEF_BASE',
	HYBRID: 'DEF_HYBRID',
};

Map.Layers = Object.keys(Map.LayerIds)
	.reduce((obj, key) => (obj[key] = key, obj), {});

Map.defaultProps = {
	width: '100%',
	height: '300px',

	zoom: 13,
	minZoom: 2,
	maxZoom: 18,
	centerCoords: [49.4404919, 12.9297611],
	layer: Map.Layers.BASE,
};

Map.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string,
	height: PropTypes.PropTypes.string,
	
	zoom: MapPropTypes.zoom,
	minZoom: MapPropTypes.zoom,
	maxZoom: MapPropTypes.zoom,
	centerCoords: MapPropTypes.coords,
	layer: PropTypes.oneOf(Object.keys(Map.Layers)),

	onZoomStart: PropTypes.func,
};

export default Map;