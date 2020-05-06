import React, {createContext, useEffect, useRef, useState} from 'react';
import BaseLayers from './BaseLayers';
import MapyCzProvider from "./MapyCzProvider";

export const MapContext = createContext(null)

const Map = (props) => {
    const mapNode = useRef(null);
    const [map, setMap] = useState(null);
    const {width, height, children} = props;

    useEffect(() => {
        if (!map && mapNode) {
            const {zoom, centerCoords} = props;
            const [lat, lng] = centerCoords;
            const center = SMap.Coords.fromWGS84(lng, lat);
            const sMap = new SMap(mapNode.current, center, zoom);

            const l = sMap.addDefaultLayer(BaseLayers.TURIST_NEW);
            l.enable();
            setMap(sMap);
        }
    }, []);

    return (
        <MapContext.Provider value={map}>
            <div style={{width, height}} ref={mapNode}>
                {map && children}
            </div>
        </MapContext.Provider>
    );
};

Map.defaultProps = {
    width: '100%',
    height: '300px',
    zoom: 13,
    minZoom: 1,
    maxZoom: 21,
    // centerCoords: [50.126554, 14.417895],
    centerCoords: [55.604890000000005, 8.97171],
    baseLayers: [BaseLayers.TURIST_NEW],
}

export default MapyCzProvider(Map);