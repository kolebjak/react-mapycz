import React from 'react';
import Map, {Marker, MarkerLayer,Path, PathLayer} from 'react-mapycz';
import {MouseControl, CompassControl, ZoomControl, KeyboardControl } from 'react-mapycz/controls';
import {examplePath} from './examplePath';

const Example = () => {
	return (
		<Map height="90vh">
			<KeyboardControl />
			<ZoomControl />
			<MouseControl zoom={false}/>
			{/*<CompassControl />*/}
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

export default Example;