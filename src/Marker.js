import React, {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "react-mapycz/MarkerLayer";

const Marker = (props) => {
    const markerLayer = useContext(MarkerLayerContext)

    const {coords: [lat, lng]} = props, coords = SMap.Coords.fromWGS84(lng, lat);
    const sMarker = new SMap.Marker(coords, false);
    markerLayer.addMarker(sMarker);

    useEffect(() => {
        return () => {
            markerLayer.removeMarker(this.sMarker, true)
        };
    })

    return null;
}

export default Marker;