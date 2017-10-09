import React from 'react';
import Map, {MapyCzProvider, MarkerLayer, Marker} from 'react-mapycz';
import {ZoomControl, SyncControl, MouseControl, CompassControl, KeyboardControl} from 'react-mapycz/controls';

class App extends React.Component {
	state = {
		zoom: 13,
		mapWidth: '100%',
		mapZoomControlOn: true,
		coordLat: 49.4404919,
		coordLng: 12.9297611,
	}

	onZoomSelectChange = this.onZoomSelectChange.bind(this);
	onWidthChange = this.onWidthChange.bind(this);
	onMapLayerChange = this.onMapLayerChange.bind(this);
	onZoomControlToggle = this.onZoomControlToggle.bind(this);
	onCoordLatChange = this.onCoordLatChange.bind(this);
	onCoordLngChange = this.onCoordLngChange.bind(this);

	onZoomSelectChange(event) {
		this.setState({zoom: parseInt(event.target.value)});
	}

	onWidthChange(event) {
		this.setState({mapWidth: event.target.value});
	}

	onMapLayerChange(event) {
		this.setState({mapLayer: event.target.value});
	}

	onZoomControlToggle(event) {
		this.setState({mapZoomControlOn: event.target.checked});
	}
	
	onCoordLatChange(event) {
		this.setState({coordLat: event.target.value});
	}


	onCoordLngChange(event) {
		this.setState({coordLng: event.target.value});
	}
		
	render() {
		return <div>
			<Map
				layer={this.state.mapLayer}
				zoom={this.state.zoom}
				width={this.state.mapWidth}
				centerCoords={[this.state.coordLat, this.state.coordLng]}
			>
				<ZoomControl/>
				<SyncControl/>
				<MouseControl/>
				<KeyboardControl/>
				<CompassControl/>
				<MarkerLayer>
					<Marker imageUrl="https://cdn2.iconfinder.com/data/icons/social-media-8/512/pointer.png" coords={[49.4404919, 12.9227611]} title="Zkouška" content={() => <div>Ahoj</div>}/>
					<Marker coords={[49.4402919, 12.9217611]}/>
					<Marker coords={[49.4404419, 12.9247611]}/>
					<Marker coords={[49.4400919, 12.9277611]}/>
					<Marker coords={[49.4401919, 12.9297611]}/>
				</MarkerLayer>
			</Map>
			<input type="range" min="1" max="18" value={this.state.zoom} onChange={this.onZoomSelectChange} />
			<input value={this.state.mapWidth} onChange={this.onWidthChange} />
			<input value={this.state.coordLat} onChange={this.onCoordLatChange} />
			<input value={this.state.coordLng} onChange={this.onCoordLngChange} />
			<label htmlFor="zoom-on"><input type="checkbox" checked={this.state.mapZoomControlOn} onChange={this.onZoomControlToggle} id="zoom-on"/> Zoom Control</label>
			<select value={this.state.mapLayer} defaultValue={Map.Layers.BASE} onChange={this.onMapLayerChange}>
				{Object.keys(Map.Layers).map((layer) => <option key={layer} value={layer}>{layer}</option>)}
			</select>

			{/* <Map>
				<ControlPane>
					<ZoomControl/>
					<SyncControl/>
				</ControlPane>
			</Map>
			 */}
		</div>;
	}
}

export default MapyCzProvider(App);