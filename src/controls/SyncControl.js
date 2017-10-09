import MapControl from './MapControl';

class SyncControl extends MapControl {
	static displayName = 'SyncControl'
	
	createControl(sMap) {
		return new sMap.constructor.Control.Sync();
	}
}

export default SyncControl;