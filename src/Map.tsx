import React, {createContext, useEffect, useImperativeHandle, useRef, useState} from 'react';
import BaseLayers from './BaseLayers';
import SMapProvider from "./SMapProvider";
import styled from 'styled-components'
import {Coordinates, MapEvent, SMap} from './types';

export const MapContext = createContext(null)

export type MapEventListener = (e: MapEvent, coordinates: Coordinates) => void

export interface MapProps {
  center?: { lat: number, lng: number };
  width?: string;
  height?: string;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  baseLayer?: BaseLayers;
  children?: React.ReactNode;
  onEvent?: MapEventListener;
  eventNameListener?: string;
  animateCenterZoom?: boolean;
  mapRef?: React.RefObject<SMap>;
  className?: string;
}

// Override PreflightCSS presets
const StyledMap = styled.div`
  img {
    max-width: initial !important;
  }
`

const handleEventListener = (e: MapEvent, sMap: unknown, onEvent: MapEventListener) => {
  const coordinates = (e?.data?.event)
    ? window.SMap.Coords.fromEvent(e.data.event, sMap)
    : null;
  onEvent(e, coordinates)
}

const Map = (props: MapProps) => {
  const mapNode = useRef(null);
  const [map, setMap] = useState<any>(null);
  const {width, height, children, onEvent, eventNameListener = "*", zoom, center, animateCenterZoom} = props;

  useEffect(() => {
    if (!map && mapNode) {
      const centerCoords = center ? window.SMap.Coords.fromWGS84(center.lng, center.lat) : undefined;
      const sMap = new window.SMap(mapNode.current, centerCoords, zoom);
      const l = sMap.addDefaultLayer(props.baseLayer ?? BaseLayers.TURIST_NEW);
      l.enable();

      setMap(sMap);
      if (onEvent) {
        const signals = sMap.getSignals();
        const eventListenerId = signals.addListener(window, eventNameListener, (e: MapEvent) => handleEventListener(e, sMap, onEvent));
        return () => {
          signals.removeListener(eventListenerId)
        }
      }
    }
    return
  }, []);

  useEffect(() => {
    if (map && center) {
      const centerCoords = window.SMap.Coords.fromWGS84(center.lng, center.lat);
      map.setCenter(centerCoords, animateCenterZoom);
      zoom !== undefined && map.setZoom(zoom)
    }
  }, [center, zoom, map]);

  useImperativeHandle(props.mapRef, () => map);

  return (
      <MapContext.Provider value={map}>
        <StyledMap style={{width, height}} className={props.className} ref={mapNode}>
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
  animateCenterZoom: false,
}

export default SMapProvider(Map);
