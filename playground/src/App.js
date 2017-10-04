import React from 'react';
import Map, {ControlPane, ZoomControl, CompassControl} from 'react-mapycz';

const App = () => (
	<div>
		<h1>Hi</h1>
		<Map>
			<ControlPane>
				<ZoomControl/>
			</ControlPane>
		</Map>
		<Map>
			<ControlPane>
				<CompassControl left="50"/>
			</ControlPane>
		</Map>
		<Map/>
	</div>
);

export default App;