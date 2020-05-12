import {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "./MarkerLayer";

interface MarkerProps {
    coords: { lng: number, lat: number }
}

const Marker = (props: MarkerProps) => {
    const markerLayer = useContext<any>(MarkerLayerContext)

    const { lng, lat } = props.coords;

    const coords = window.SMap.Coords.fromWGS84(lng, lat);
    const sMarker = new window.SMap.Marker(coords, false);
    markerLayer?.addMarker(sMarker);

    useEffect(() => {
        return () => {
            markerLayer.removeMarker(sMarker, true)
        };
    })

    return null;
}

export default Marker;