import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './MapPropTypes';

const MAP_ID_PREFIX = '_map-component-';

class Map extends React.Component {

	static childContextTypes = {
		sMap: PropTypes.object,
	}

	static LayerIds = {
		TOURIST: 'DEF_TURIST',
		PHOTO: 'DEF_OPHOTO',
		BASE: 'DEF_BASE',
		HYBRID: 'DEF_HYBRID',
	}

	static Layers = Object.keys(Map.LayerIds)
		.reduce((obj, key) => (obj[key] = key, obj), {});

	static propTypes = {
		children: PropTypes.node,
		width: PropTypes.string,
		height: PropTypes.PropTypes.string,
		
		zoom: MapPropTypes.zoom,
		minZoom: MapPropTypes.zoom,
		maxZoom: MapPropTypes.zoom,
		centerCoords: MapPropTypes.coords,
		layer: PropTypes.oneOf(Object.keys(Map.Layers)),
	
		onZoomStart: PropTypes.func,
	}

	static defaultProps = {
		width: '100%',
		height: '300px',
	
		zoom: 13,
		minZoom: 1,
		maxZoom: 21,
		centerCoords: [49.4404919, 12.9297611],
		layer: Map.Layers.BASE,
	};

	constructor(props, context) {
		super(props, context);
		this.mapId = MAP_ID_PREFIX + Map.COUNTER++;
		this.mapLayers = {};
		const {zoom, centerCoords, layer} = props;
		this.state = {
			zoom,
			centerCoords,
			layer,
			sMap: null,
		};
	}

	onComponentMount = this.onComponentMount.bind(this);

	onComponentMount(node) {
		if (!this.state.sMap && node) {
			this.initiateMap(node);
		}
	}

	getChildContext() {
		return {
			sMap: this.state.sMap,
		};
	}

	initiateMap(node) {
		const {zoom, centerCoords, layer} = this.props,
			[lat, lng] = centerCoords,
			center = SMap.Coords.fromWGS84(lng, lat);

		const sMap = new SMap(node, center, zoom);
		this.mapLayers[layer] = sMap.addDefaultLayer(SMap[Map.LayerIds[layer]]);
		this.mapLayers[layer].enable();

		this.setState({sMap});
	}

	componentWillReceiveProps(nextProps) {
		const {zoom, centerCoords, layer} = nextProps;
		this.setState({
			zoom,
			centerCoords,
			layer,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const {zoom, layer, sMap} = this.state;
		if (sMap) { 
			sMap.setZoom(zoom);
			if (layer != prevState.layer) {
				if(!this.mapLayers[layer]) {
					this.mapLayers[layer] = sMap.addDefaultLayer(SMap[Map.LayerIds[layer]]);
				}
				this.mapLayers[prevState.layer].disable();
				this.mapLayers[layer].enable();
			}
		}
	}

	render() {
		const {width, height, children} = this.props;
		return (
			<div style={{width, height}} ref={this.onComponentMount}>
				{this.state.sMap && children}
			</div>
		);
	}
}

export default Map;