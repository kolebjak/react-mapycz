import React from 'react';
import Map, {MapyCzProvider, Marker, MarkerLayer,Path, PathLayer} from 'react-mapycz';
import {MouseControl, KeyboardControl, ZoomControl, CompassControl, SyncControl} from 'react-mapycz/controls';
import {examplePath} from './examplePath';

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

const Example = () => {
	return (
		<Map height="90vh">
			<SyncControl/>
			<MouseControl zoom={false}/>
			<KeyboardControl />
			<ZoomControl title={['Zoom in', 'Zoom out']} labels={LABELS} />
			<CompassControl title="Move" />
			<MarkerLayer>
				<Marker coords={[55.60501000000001, 8.97171]} />
				<Marker coords={[55.547290000000004, 8.897590000000001]} />
			</MarkerLayer>
			<PathLayer>
				<Path coords={examplePath} />
			</PathLayer>
		</Map>
	);
};

export default MapyCzProvider(Example);