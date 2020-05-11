import { useContext } from 'react';
import {MapContext} from "../Map";

const KeyboardControl = (props: any) => {
    const {pan, zoom} = props;
    let mode = 0;

    // @ts-ignore
    mode |= pan && SMap.KB_PAN;
    // @ts-ignore
    mode |= zoom && SMap.KB_ZOOM;

    const map = useContext<any>(MapContext)
    // @ts-ignore
    const mouseControl = new SMap.Control.Keyboard(mode);
    map.addControl(mouseControl);

    return null;
}

KeyboardControl.defaultProps = {
    pan: true,
    zoom: true,
}

export default KeyboardControl; 