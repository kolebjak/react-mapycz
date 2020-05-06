import React, {createContext, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {MapContext} from "react-mapycz/Map";

export const MarkerLayerContext = createContext(null)

const MarkerLayer = ({ children }) => {
    const map = useContext(MapContext)
    const markerLayer = new SMap.Layer.Marker();

    map.addLayer(markerLayer);
    markerLayer.enable();


    useEffect(() => {
        return () => {
            map.removeLayer(markerLayer)
        };
    })

    return <MarkerLayerContext.Provider value={markerLayer}>{children}</MarkerLayerContext.Provider>;
}

export default MarkerLayer;