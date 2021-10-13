import React, {createContext, useEffect, useRef, useState} from 'react';
import BaseLayers from './BaseLayers';
import SMapProvider from "./SMapProvider";
import styled from 'styled-components'
import { Coordinates, MapEvent } from './types';

export const MapContext = createContext(null)

interface MapProps {
  center: { lat: number, lng: number };
  width?: string;
  height?: string;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  baseLayers?: number[];
  children?: React.ReactNode;
  onEvent?: (e: MapEvent, coordinates: Coordinates) => void
  eventNameListener? : string
}

// Override PreflightCSS presets
const StyledMap = styled.div`
  img {
    max-width: initial !important;
  }
`

const Map = (props: MapProps) => {
  const mapNode = useRef(null);
  const [map, setMap] = useState(null);
  const { 
    width, 
    height, 
    children, 
    onEvent, 
    eventNameListener = "*" 
  } = props;

  useEffect(() => {
    if (!map && mapNode) {
      const {zoom, center} = props;
      const centerCoords = window.SMap.Coords.fromWGS84(center.lng, center.lat);
      const sMap = new window.SMap(mapNode.current, centerCoords, zoom);
      const l = sMap.addDefaultLayer(BaseLayers.TURIST_NEW);
      const signals = sMap.getSignals();
      l.enable();
      setMap(sMap);

      if (onEvent) {
        signals.addListener(window, eventNameListener, (e: MapEvent)=>{
          const coordinates = (e?.data?.event) 
            ? window.SMap.Coords.fromEvent(e.data.event, sMap) 
            : null;
          onEvent(e, coordinates)
        });
      }
    }
  }, []);

  return (
    <MapContext.Provider value={map}>
      <StyledMap style={{ width, height }} ref={mapNode}>
        {map && children}
      </StyledMap>
    </MapContext.Provider>
  );
};

Map.defaultProps = {
  width: '100%',
  height: '300px',
  zoom: 13,
  minZoom: 1,
  maxZoom: 21,
  baseLayers: [BaseLayers.TURIST_NEW],
}

export default SMapProvider(Map);
