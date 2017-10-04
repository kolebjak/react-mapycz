import AbstractControl from './AbstractControl';

class Sync extends AbstractControl {
	
	createControl(smap) {
		return new smap.constructor.Control.Sync();
	}
}

export default Sync;