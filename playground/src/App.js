import React from 'react';
import BasicExample from './BasicExample';
import ControlsExample from './ControlsExample';
import MarkerExample from './MarkerExample';
import PlaygroundExample from './PlaygroundExample';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
	return (
		<MuiThemeProvider>
			<Tabs>
				<Tab label="Basic">
					<BasicExample />
				</Tab>
				<Tab label="Controls">
					<ControlsExample />
				</Tab>
				<Tab label="Markers">
					<MarkerExample />
				</Tab>
				<Tab label="Events" disabled={true}/>
				<Tab label="Full Playground">
					<PlaygroundExample />
				</Tab>
			</Tabs>
		</MuiThemeProvider>
	);
		
	/* <Map
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
	*/
};

export default App;