import React from 'react';
import PropTypes from 'prop-types';
import {componentConstruct, componentDidUpdate} from './util/MapComponentHelper';

class PoiLayer extends React.Component {

	static displayName = 'PoiLayer'

	static contextTypes = {
		sMap: PropTypes.object,
	}
	
	static propTypes = {
		enabled: PropTypes.bool,
	}

	static defaultProps = {
		enabled: true,
	}

	static updaterMap = {
		enabled(sLayer, bool) {
			bool ? sLayer.enable() : sLayer.disable();
		},
	}

	constructor(props, context) {
		super(props, context);

		const sLayer = new SMap.Layer.Marker();
		this.context.sMap.addLayer(sLayer);
		this.sLayer = sLayer;
		this.createProvider();

		componentConstruct(props, sLayer, PoiLayer.updaterMap);
	}

	createProvider() {
		const {sMap} = this.context,
			dataProvider = sMap.createDefaultDataProvider();
		dataProvider.setOwner(sMap);
		dataProvider.addLayer(this.sLayer);
		dataProvider.setMapSet(SMap.MAPSET_BASE);
		dataProvider.enable();
	}

	componentDidUpdate(prevProps) {
		componentDidUpdate(this, this.sLayer, PoiLayer.updaterMap, prevProps);
	}

	componentWillUnmount() {
		this.context.sMap.removeLayer(this.sLayer);
	}

	render() {
		return null;
	}
}

export default PoiLayer;