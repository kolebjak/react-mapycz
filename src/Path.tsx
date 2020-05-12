import {useContext} from 'react';
import {PathLayerContext} from "./PathLayer";

interface PathProps {
  color?: string;
  width: number;
  coords: Array<{ lng: number, lat: number }>
}

const Path = ({coords, color, width}: PathProps) => {
  const pathLayer = useContext<any>(PathLayerContext)
  const points = coords.map(p => window.SMap.Coords.fromWGS84(p.lng, p.lat));
  
  const options = {
    color,
    width,
  };

  const polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, null, points, options);
  pathLayer?.addGeometry(polyline);

  return null;
}

Path.defaultProps = {
  color: '#f00',
  width: 3,
}

export default Path;