import React from 'react';
import Map, {MapyCzProvider} from 'react-mapycz';
import {MouseControl, KeyboardControl, ZoomControl, CompassControl, SyncControl} from 'react-mapycz/controls';

const LABELS = {
	2:  'World',
	5:  'States',
	8:  'Regions',
	11: 'Cities',
	14: 'Villages',
	17: 'Streets',
	20: 'Buildings',
	21: 'Bird\'s Eye',
};

const ControlsExample = () => {
	return (
		<Map height="90vh">
			<SyncControl/>
			<MouseControl zoom={false}/>
			<KeyboardControl />
			<ZoomControl title={['Zoom in', 'Zoom out']} labels={LABELS} />
			<CompassControl title="Move" />
		</Map>
	);
};

export default MapyCzProvider(ControlsExample);