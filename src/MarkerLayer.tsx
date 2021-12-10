import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {MapContext} from "./Map";

export const MarkerLayerContext = createContext(null)

interface MarkerLayerProps {
    children: ReactNode;
    enableClustering?: boolean;
}

const MarkerLayer = ({ children, enableClustering }: MarkerLayerProps) => {
    const map = useContext<any>(MapContext)
    const markerLayer = new window.SMap.Layer.Marker();

    if (enableClustering) {
        const clusterer = new window.SMap.Marker.Clusterer(map);
        markerLayer.setClusterer(clusterer);
    }

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