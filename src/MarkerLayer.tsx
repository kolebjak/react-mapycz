import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {MapContext} from "./Map";
import {ClusterConfig} from './types';

export const MarkerLayerContext = createContext(null)

interface MarkerLayerProps {
    children: ReactNode;
    enableClustering?: boolean;
    clusterConfig?: ClusterConfig;
}

const MarkerLayer = ({children, enableClustering, clusterConfig}: MarkerLayerProps) => {
    const map = useContext<any>(MapContext)
    const markerLayer = new window.SMap.Layer.Marker();

    if (enableClustering) {
        const clusterer = new window.SMap.Marker.Clusterer(
            map,
            clusterConfig?.maxDistance,
            clusterConfig?.clusterCtor
        );
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