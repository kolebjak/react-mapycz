import React from 'react';
import Map, {MapyCzProvider} from 'react-mapycz';
import {SyncControl} from 'react-mapycz/controls';

const BasicExample = () => {
	return <Map height="90vh">
		<SyncControl/>
	</Map>;
};

export default MapyCzProvider(BasicExample);