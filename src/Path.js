import React, {useContext} from 'react';
import {PathLayerContext} from "react-mapycz/PathLayer";

const Path = ({coords}) => {
    const pathLayer = useContext(PathLayerContext)

    var points = [];
    if (coords) {
        points = coords.map(p => SMap.Coords.fromWGS84(p.lng, p.lat));
    }

    var options1 = {
        color: '#f00', // TODO: color by difficulty / type?
        width: 3,
    };

    const polyline = new SMap.Geometry(SMap.GEOMETRY_POLYLINE, null, points, options1);
    pathLayer.addGeometry(polyline);

    return null;
}

export default Path;