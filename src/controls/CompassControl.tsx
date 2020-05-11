import {useContext} from 'react';
import {MapContext} from "../Map";

const CompassControl = () => {
    const map = useContext<any>(MapContext);
    // @ts-ignore
    const compassControl = new SMap.Control.Compass();
    map?.addControl(compassControl);

    /// TODO:
    // componentWillUnmount() {
    // 	this.context.sMap.removeControl(this.sControl);
    // }

    return null;
}

// TODO:
// CompassControl.defaultProps = {
//     title: 'Posun mapy',
//     left: 10,
//     top: 10,
// }

export default CompassControl;