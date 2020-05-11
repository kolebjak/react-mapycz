import {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "./MarkerLayer";

const Marker = (props: any) => {
    const markerLayer = useContext<any>(MarkerLayerContext)

    // @ts-ignore
    const {coords: [lat, lng]} = props, coords = SMap.Coords.fromWGS84(lng, lat);
    // @ts-ignore
    const sMarker = new SMap.Marker(coords, false);
    markerLayer?.addMarker(sMarker);

    useEffect(() => {
        return () => {
            markerLayer.removeMarker(sMarker, true)
        };
    })

    return null;
}

export default Marker;