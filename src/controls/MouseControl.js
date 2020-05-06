import React, {useContext} from 'react';
import {MapContext} from "react-mapycz/Map";

const MouseControl = (props) => {
    const {pan, wheel, zoom} = props;
    let mode = 0;
    mode |= pan && SMap.MOUSE_PAN;
    mode |= zoom && SMap.MOUSE_ZOOM;
    mode |= wheel && SMap.MOUSE_WHEEL;


    const map = useContext(MapContext)
    const mouseControl = new SMap.Control.Mouse(mode);

    map.addControl(mouseControl);
	// TODO:
	// componentWillUnmount() {
	// 	this.context.sMap.removeControl(this.sControl);
	// }

    return null;
}

MouseControl.defaultProps = {
	pan: true,
	wheel: true,
	zoom: true,
}

export default MouseControl; 