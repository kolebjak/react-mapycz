import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {MapContext} from "./Map";
import {ClusterConfig} from './types';

export const MarkerLayerContext = createContext(null)

export interface MarkerLayerProps {
    children: ReactNode;
    enableClustering?: boolean;
    clusterConfig?: ClusterConfig;
    id?: string | null;
}

const MarkerLayer = ({children, enableClustering, clusterConfig, id}: MarkerLayerProps) => {
    const map = useContext<any>(MapContext)
    const markerLayer = new window.SMap.Layer.Marker(id);

    if (enableClustering) {
        const clusterer = new window.SMap.Marker.Clusterer(
            map,
            clusterConfig?.maxDistance,
            window.SMap.Marker.Cluster(id, { color: "#ff0000"})
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
