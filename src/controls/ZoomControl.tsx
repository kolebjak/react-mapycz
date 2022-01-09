import {useContext} from 'react';
import {MapContext} from "../Map";

export interface ZoomControlProps {
  showZoomMenu?: boolean;
  labels?: object;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const ZoomControl = ({labels, showZoomMenu, top, bottom, left, right}: ZoomControlProps) => {
  const map = useContext<any>(MapContext);
  const zoomControl = new window.SMap.Control.Zoom(labels, {showZoomMenu});
  map.addControl(zoomControl);

  // TODO: set position
  const controlStyles = zoomControl._dom['container'].style;

  // Set position
  controlStyles['top'] = `${top}px`;
  controlStyles['right'] = `${right}px`;
  controlStyles['bottom'] = `${bottom}px`;
  controlStyles['left'] = `${left}px`;

  return null;
}

ZoomControl.defaultProps = {
  showZoomMenu: false,
  labels: {},
}

export default ZoomControl;