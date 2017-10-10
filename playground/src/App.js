import React from 'react';
import Map, {MapyCzProvider, MarkerLayer, Marker, PoiLayer, BaseLayers} from 'react-mapycz';
import {ZoomControl, SyncControl, MouseControl, CompassControl, KeyboardControl} from 'react-mapycz/controls';

class App extends React.Component {
	state = {
		zoom: 13,
		mapWidth: '100%',
		mapZoomControlOn: true,
		coordLat: 49.4404919,
		coordLng: 12.9297611,
		mapLayers: [BaseLayers.SMART_BASE],
		showPois: true,
		maxZoom: 21,
	}

	onZoomSelectChange = this.onZoomSelectChange.bind(this);
	onWidthChange = this.onWidthChange.bind(this);
	onMapLayersChange = this.onMapLayersChange.bind(this);
	onZoomControlToggle = this.onZoomControlToggle.bind(this);
	onCoordLatChange = this.onCoordLatChange.bind(this);
	onCoordLngChange = this.onCoordLngChange.bind(this);
	onShowPoisChange = this.onShowPoisChange.bind(this);
	onMaxZoomChange = this.onMaxZoomChange.bind(this);

	onZoomSelectChange(event) {
		this.setState({zoom: parseInt(event.target.value)});
	}

	onWidthChange(event) {
		this.setState({mapWidth: event.target.value});
	}

	onMapLayersChange(event) {
		const values = [...event.target.options].filter((option) => option.selected).map((option) => Number(option.value));
		this.setState({mapLayers: values});
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

	onShowPoisChange(event) {
		this.setState({showPois: event.target.checked});
	}

	onMaxZoomChange(event) {
		this.setState({maxZoom: event.target.value});
	}
		
	render() {
		return <div>
			<Map
				baseLayers={this.state.mapLayers}
				zoom={this.state.zoom}
				maxZoom={this.state.maxZoom}
				width={this.state.mapWidth}
				centerCoords={[this.state.coordLat, this.state.coordLng]}
			>
				<ZoomControl labels={ZoomControl.DEFAULT_LABELS}/>
				<SyncControl/>
				<MouseControl/>
				<KeyboardControl/>
				<CompassControl/>
				
				<PoiLayer enabled={this.state.showPois} />
				<MarkerLayer>
					<Marker anchor={[0,0]} width={16} imageUrl="https://cdn2.iconfinder.com/data/icons/social-media-8/512/pointer.png" coords={[49.4404919, 12.9227611]} title="Zkouška"/>
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
			<input value={this.state.maxZoom} onChange={this.onMaxZoomChange} />
			<label htmlFor="zoom-on"><input type="checkbox" checked={this.state.mapZoomControlOn} onChange={this.onZoomControlToggle} id="zoom-on"/> Zoom Control</label>
			<label htmlFor="show-pois"><input type="checkbox" checked={this.state.showPois} onChange={this.onShowPoisChange} id="show-pois"/> ShowPOIs</label>
			<div>
				<select style={{width: '200px', height: '200px'}} value={this.state.mapLayers} onChange={this.onMapLayersChange} multiple={true}>
					{
						Object.keys(BaseLayers).map((layerKey) => 
							<option value={BaseLayers[layerKey]} key={layerKey}>{layerKey}</option>
						)
					}
				</select>
			</div>

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