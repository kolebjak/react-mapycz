import React from 'react';
import Map, {MapyCzProvider, MarkerLayer, Marker} from 'react-mapycz';
import {MouseControl, KeyboardControl, ZoomControl, CompassControl, SyncControl} from 'react-mapycz/controls';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class ControlsExample extends React.Component {

	state = {
		markers: [
			[49.4402919, 12.9217611],
			[49.4102919, 12.9317611],
			[49.4002919, 12.8417611],
			[49.4502919, 12.8817611],
		],
	}

	onAddMarkerClick = this.onAddMarkerClick.bind(this);
	onRemoveMarkerClick = this.onRemoveMarkerClick.bind(this);

	onAddMarkerClick() {
		const randMarker = [
			49.4402919 + (0.5 - Math.random()) * 0.1,
			12.9217611 + (0.5 - Math.random()) * 0.1,
		];
		this.setState({
			markers: [].concat(this.state.markers, [randMarker]),
		});
	}

	onRemoveMarkerClick() {
		const randIdx = Math.round(Math.random() * (this.state.markers.length - 1));
		const markers = [...this.state.markers];
		markers.splice(randIdx,1);
		this.setState({markers});
	}

	render() {
		return <div>
			<Toolbar>
				<ToolbarGroup lastChild={true}>
					<RaisedButton label="Add Random Marker" primary={true} onClick={this.onAddMarkerClick} />
					<RaisedButton label="Remove Random Marker" onClick={this.onRemoveMarkerClick} disabled={this.state.markers.length === 0}/>
				</ToolbarGroup>
			</Toolbar>
			<Map height="90vh">
				<SyncControl/>
				<MouseControl zoom={false}/>
				<KeyboardControl />
				<ZoomControl title={['Zoom in', 'Zoom out']} showZoomMenu={false} />
				<CompassControl title="Move" />
				<MarkerLayer>
					{this.state.markers.map((marker, idx) => <Marker title={marker.toString()} key={`marker-${idx}`} coords={marker}/>)}
				</MarkerLayer>
			</Map>
		</div>;
	}
}

export default MapyCzProvider(ControlsExample);