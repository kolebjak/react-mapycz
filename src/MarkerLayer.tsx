import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {MapContext} from "./Map";

export const MarkerLayerContext = createContext(null)

interface MarkerLayerProps {
    children: ReactNode
}

const MarkerLayer = ({ children }: MarkerLayerProps) => {
    const map = useContext<any>(MapContext)
    const markerLayer = new window.SMap.Layer.Marker();

    map?.addLayer(markerLayer);
    markerLayer.enable();


    useEffect(() => {
        return () => {
            map.removeLayer(markerLayer)
        };
    })

    return <MarkerLayerContext.Provider value={markerLayer}>{children}</MarkerLayerContext.Provider>;
}

export default MarkerLayer;