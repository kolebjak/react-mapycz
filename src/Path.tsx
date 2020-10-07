import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";

interface PathProps {
  color?: string;
  width: number;
  coords: Array<{ lng: number, lat: number }>
  criterion?: 'fast' | 'short' | 'bike1' | 'bike2' | 'bike3' | 'turist1' | 'turist2'
  dynamicRoute?: boolean
}

const Path = ({ coords, color, width, criterion, dynamicRoute }: PathProps) => {
  const pathLayer = useContext<any>(PathLayerContext)
  const points = coords.map(p => window.SMap.Coords.fromWGS84(p.lng, p.lat));
  const options = {
    color,
    width,
  };
    
  const getDynamicPath = (results: { results: any }) => {
    const newPoints = results.getResults().geometry;
    const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, null, newPoints, options);
    pathLayer?.addGeometry(polyline);
  }

  if (dynamicRoute) {
    new window.SMap.Route(points, getDynamicPath, { criterion: criterion });
  } else {
    const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, null, points, options);
    pathLayer?.addGeometry(polyline);
  }

  return null;
}

Path.defaultProps = {
  color: '#f00',
  width: 3,
  criterion: 'fast',
  dynamicRoute: false
}

export default Path;