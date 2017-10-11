import React from 'react';
import PropTypes from 'prop-types';
import MapPropTypes from './util/MapPropTypes';
import BaseLayers from './BaseLayers'; 
import {componentDidUpdate, componentConstruct} from './util/MapComponentHelper';

class Map extends React.Component {

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
		baseLayers: PropTypes.arrayOf(PropTypes.number),
	}

	static defaultProps  = {
		width: '100%',
		height: '300px',
	
		zoom: 13,
		minZoom: 1,
		maxZoom: 21,
		centerCoords: [49.4404919, 12.9297611],
		baseLayers: [BaseLayers.SMART_BASE],
	}

	static updateMap = {
		zoom(sMap, zoom) {
			sMap.setZoom(zoom);
		},

		baseLayers(sMap, layer, prevLayers) {
			prevLayers && prevLayers.forEach((prevLayerId) => sMap.getLayer(prevLayerId).disable());

			layer.forEach((nextLayerId) => {
				let nextLayer = sMap.getLayer(nextLayerId);
				if (nextLayer === null) {
					nextLayer = sMap.addDefaultLayer(nextLayerId);
				}
				nextLayer.enable();
			});
		},

		centerCoords(sMap, coords) {
			const [lat, lng] = coords;
			sMap.setCenter(SMap.Coords.fromWGS84(lng, lat));
		},

		minZoom(sMap, level, prevLevel, {maxZoom}) {
			sMap.setZoomRange(level, maxZoom);
		},

		maxZoom(sMap, level, prevLevel, {minZoom}) {
			sMap.setZoomRange(minZoom, level);
		},
	}

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