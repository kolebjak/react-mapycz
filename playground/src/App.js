import React from 'react';
import Map, {ControlPane, ZoomControl, SyncControl} from 'react-mapycz';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			zoom: 13,
			mapWidth: '100%',
		};

		this.onZoomSelectChange = ::this.onZoomSelectChange;
		this.onWidthChange = ::this.onWidthChange;
		this.onMapLayerChange = ::this.onMapLayerChange;
	}

	onZoomSelectChange(event) {
		this.setState({zoom: parseInt(event.target.value)});
	}

	onWidthChange(event) {
		this.setState({mapWidth: event.target.value});
	}

	onMapLayerChange(event) {
		this.setState({mapLayer: event.target.value});
	}

	render() {
		return (<div>
			<Map layer={this.state.mapLayer} zoom={this.state.zoom} width={this.state.mapWidth}>
				<ControlPane>
					<ZoomControl/>
					<SyncControl/>
				</ControlPane>
			</Map>
			<input type="range" min="1" max="18" value={this.state.zoom} onChange={this.onZoomSelectChange} />
			<input value={this.state.mapWidth} onChange={this.onWidthChange} />
			<select value={this.state.mapLayer} defaultValue={Map.Layers.BASE} onChange={this.onMapLayerChange}>
				{Object.keys(Map.Layers).map((layer) => <option key={layer} value={layer}>{layer}</option>)}
			</select>
		</div>);
	}
}

export default App;