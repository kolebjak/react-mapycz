import React, {createContext, useContext, useEffect} from 'react';
import {MapContext} from "./Map";

export const PathLayerContext = createContext(null)

const PathLayer = ({children}: any) => {
    const map = useContext<any>(MapContext)
    const pathLayer = new window.SMap.Layer.Geometry();

    map.addLayer(pathLayer);
    pathLayer.enable();

    useEffect(() => {
        return () => { map.removeLayer(pathLayer) };
    })

    return <PathLayerContext.Provider value={pathLayer}>{children}</PathLayerContext.Provider>;
}

export default PathLayer;