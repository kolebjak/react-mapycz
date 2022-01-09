import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";
import {GeometryOptions, MarkerCoords} from './types';

export interface PolygonProps {
  coords: MarkerCoords[];
  id?: string;
  options?: GeometryOptions;
}

const Polygon = ({ coords, options, id }: PolygonProps) => {
  const PolygonLayer = useContext<any>(PathLayerContext)
  const points = coords.map(p => window.SMap.Coords.fromWGS84(p.lng, p.lat));
  const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYGON, id, points, options);
  PolygonLayer?.addGeometry(polyline);
  return null;
}

Polygon.defaultProps = {
  options: {
    color: '#0000FF',
    width: 5,
  }
}

export default Polygon;