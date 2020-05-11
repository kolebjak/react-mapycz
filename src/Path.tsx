import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";

const Path = ({coords}: any) => {
    const pathLayer = useContext<any>(PathLayerContext)

    var points = [];
    if (coords) {
        // @ts-ignore
        points = coords.map(p => SMap.Coords.fromWGS84(p.lng, p.lat));
    }

    var options1 = {
        color: '#f00', // TODO: color by difficulty / type?
        width: 3,
    };

    // @ts-ignore
    const polyline = new SMap.Geometry(SMap.GEOMETRY_POLYLINE, null, points, options1);
    pathLayer?.addGeometry(polyline);

    return null;
}

export default Path;