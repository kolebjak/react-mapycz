import {useContext} from 'react';
import {MapContext} from "../Map";

const ZoomControl = ({labels, ...options}: any) => {
  const map = useContext<any>(MapContext);
  // @ts-ignore
  const zoomControl = new SMap.Control.Zoom(labels, options);
  map.addControl(zoomControl);

  // TODO: set position

  return null;
}

ZoomControl.defaultProps = {
  showZoomMenu: false,
  labels: {},
  right: 80,
  top: 100,
}

export default ZoomControl;