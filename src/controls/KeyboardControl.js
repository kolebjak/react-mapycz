import React, {useContext} from 'react';
import {MapContext} from "react-mapycz/Map";

const KeyboardControl = (props) => {
    const {pan, zoom} = props;
    let mode = 0;

    mode |= pan && SMap.KB_PAN;
    mode |= zoom && SMap.KB_ZOOM;

    const map = useContext(MapContext)
    const mouseControl = new SMap.Control.Keyboard(mode);
    map.addControl(mouseControl);

    return null;

}

KeyboardControl.defaultProps = {
    pan: true,
    zoom: true,
}

export default KeyboardControl; 