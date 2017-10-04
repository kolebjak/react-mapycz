import React from 'react';
import PropTypes from 'prop-types';
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
		let center = SMap.Coords.fromWGS84(14.41790, 50.12655);
		let smap = new SMap(document.getElementById(this.mapId), center, this.props.zoomLevel);
		smap.addDefaultLayer(SMap[this.props.layer]).enable();
		this.setState({smap});
	}

	componentDidUpdate() {
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

Map.Layers = {
	TOURIST: 'DEF_TURIST',
	PHOTO: 'DEF_OPHOTO',
	BASE: 'DEF_BASE',
	HYBRID: 'DEF_HYBRID',
};

Map.defaultProps = {
	width: '100%',
	height: '300px',
	zoomLevel: 13,
	layer: Map.Layers.BASE,
};

Map.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string,
	height: PropTypes.PropTypes.string,
	zoomLevel: PropTypes.number,
	layer: PropTypes.oneOf(Object.keys(Map.Layers).map((key) => Map.Layers[key])),
};

export default Map;