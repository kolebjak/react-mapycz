import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";
import {GeometryOptions} from './types';

interface Results {
  [key:string]: any;
}

export interface PathProps {
  /**
   * @deprecated use options.color
   */
  color?: string;
  /**
   * @deprecated use options.width
   */
  width?: number;
  coords: Array<{ lng: number, lat: number }>
  criterion?: 'fast' | 'short' | 'bike1' | 'bike2' | 'bike3' | 'turist1' | 'turist2'
  dynamicRoute?: boolean;
  options?: GeometryOptions;
  id?: string;
}

const Path = ({ coords, color, width, criterion, dynamicRoute, options, id }: PathProps) => {
  const pathLayer = useContext<any>(PathLayerContext)
  const points = coords.map(p => window.SMap.Coords.fromWGS84(p.lng, p.lat));
  const geometryOptions = {
    color,
    width,
    ...options,
  };
    
  const getDynamicPath = (results: Results) => {
    const newPoints = results && results.getResults().geometry;
    const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, id, newPoints, geometryOptions);
    pathLayer?.addGeometry(polyline);
  }

  if (dynamicRoute) {
    new window.SMap.Route(points, getDynamicPath, { criterion: criterion });
  } else {
    const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, id, points, geometryOptions);
    pathLayer?.addGeometry(polyline);
  }

  return null;
}

Path.defaultProps = {
  color: '#f00',
  width: 3,
  criterion: 'fast',
  dynamicRoute: false,
  options: {
    color: '#f00',
    width: 3,
  }
}

export default Path;