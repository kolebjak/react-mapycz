import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";

export const OUTLINE_STYLES = {
  SOLID: 0,
  DASH: 1,
  DOT: 2,
  DASHDOT: 3,
}

interface PolygonProps {
  coords: Array<{ lng: number, lat: number }>
  options?: {
    title?: string;
    minDist?: number;
    color?: string;
    opacity?: number;
    width?: number;
    style?: unknown;
    outlineColor?: string;
    outlineOpacity?: number;
    outlineWidth?: number;
    outlineStyle?: number;
  }
  id?: string;
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