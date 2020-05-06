import React, {useContext} from 'react';
import {MapContext} from "react-mapycz/Map";
// import {componentConstruct, componentDidUpdate} from '../util/MapComponentHelper';
// import {positionUpdater, domAttrUpdater} from '../util/Updaters';

const CompassControl = () => {
    const map = useContext(MapContext);
    const compassControl = new SMap.Control.Compass();
    map.addControl(compassControl);

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