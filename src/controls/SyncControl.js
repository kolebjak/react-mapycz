import AbstractControl from './AbstractControl';

class SyncControl extends AbstractControl {
	
	createControl(sMap) {
		return new sMap.constructor.Control.Sync();
	}
}

export default SyncControl;