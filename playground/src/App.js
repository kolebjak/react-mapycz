import React from 'react';
import Map, {ControlPane, ZoomControl} from 'react-mapycz';

const App = () => {
	return (<div>
		<h1>Hi</h1>
		<Map
			layer={Map.Layers.PHOTO}
		>
			<ControlPane>
				<ZoomControl/>
			</ControlPane>
		</Map>
	</div>);
};

export default App;