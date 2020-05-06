import React, {createContext, useContext, useEffect} from 'react';
import {MapContext} from "react-mapycz/Map";

export const PathLayerContext = createContext(null)

const PathLayer = ({children}) => {
    const map = useContext(MapContext)
    const pathLayer = new SMap.Layer.Geometry();

    map.addLayer(pathLayer);
    pathLayer.enable();

    useEffect(() => {
        return () => { map.removeLayer(pathLayer) };
    })

    return <PathLayerContext.Provider value={pathLayer}>{children}</PathLayerContext.Provider>;
}

export default PathLayer;