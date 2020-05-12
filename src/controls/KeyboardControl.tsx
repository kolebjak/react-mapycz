import { useContext } from 'react';
import {MapContext} from "../Map";

interface KeyboardControlProps {
    pan?: boolean;
    zoom?: boolean;
}

const KeyboardControl = (props: KeyboardControlProps) => {
    const {pan, zoom} = props;
    let mode = 0;

    mode |= pan && window.SMap.KB_PAN;
    mode |= zoom && window.SMap.KB_ZOOM;

    const map = useContext<any>(MapContext)
    const mouseControl = new window.SMap.Control.Keyboard(mode);
    map.addControl(mouseControl);

    return null;
}

KeyboardControl.defaultProps = {
    pan: true,
    zoom: true,
}

export default KeyboardControl; 