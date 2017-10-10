import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './MapPropTypes';
import {componentDidUpdate, componentConstruct} from './MapComponentHelper';

class Map extends React.Component {

	// region statics

	static LayerIds = {
		TOURIST: 'DEF_TURIST',
		PHOTO: 'DEF_OPHOTO',
		BASE: 'DEF_BASE',
		HYBRID: 'DEF_HYBRID',
	}

	static Layers = Object.keys(Map.LayerIds)
		.reduce((obj, key) => (obj[key] = key, obj), {})

	static LAYERS_ENUM = Object.keys(Map.LayerIds)

	static childContextTypes = {
		sMap: PropTypes.object,
	}

	static propTypes = {
		children: PropTypes.node,
		width: PropTypes.string,
		height: PropTypes.PropTypes.string,
		
		zoom: MapPropTypes.zoom,
		minZoom: MapPropTypes.zoom,
		maxZoom: MapPropTypes.zoom,
		centerCoords: MapPropTypes.coords,
		layer: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.oneOf(Map.LAYERS_ENUM)),
			PropTypes.oneOf(Map.LAYERS_ENUM),
		]),
	}

	static defaultProps = {
		width: '100%',
		height: '300px',
	
		zoom: 13,
		minZoom: 1,
		maxZoom: 21,
		centerCoords: [49.4404919, 12.9297611],
		layer: Map.Layers.BASE,
	}

	static updateMap = {
		zoom(sMap, zoom) {
			sMap.setZoom(zoom);
		},

		layer(sMap, layer, prevLayer) {
			let sLayer = sMap.getLayer(SMap[Map.LayerIds[layer]]);
			const prevSLayer = sMap.getLayer(SMap[Map.LayerIds[prevLayer]]);
			if (sLayer === null) {
				sLayer = sMap.addDefaultLayer(SMap[Map.LayerIds[layer]]);
			}
			prevSLayer && prevSLayer.disable();
			sLayer.enable();
		},

		centerCoords(sMap, coords) {
			const [lat, lng] = coords;
			sMap.setCenter(SMap.Coords.fromWGS84(lng, lat));
		},
	}

	// endregion

	state = {
		sMap: null,
	}

	onComponentMount = this.onComponentMount.bind(this)

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
		const {zoom, centerCoords} = this.props,
			[lat, lng] = centerCoords,
			center = SMap.Coords.fromWGS84(lng, lat);

		const sMap = new SMap(node, center, zoom);
		componentConstruct(this.props, sMap, Map.updateMap);
		this.setState({sMap});
	}

	componentDidUpdate(prevProps) {
		componentDidUpdate(this, this.state.sMap, Map.updateMap, prevProps);
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