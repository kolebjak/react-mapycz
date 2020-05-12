import {useContext, useEffect} from 'react';
import {MapContext} from "../Map";

interface MouseControlProps {
  pan?: boolean;
  wheel?: boolean;
  zoom?: boolean;
}

const MouseControl = (props: MouseControlProps) => {
  const {pan, wheel, zoom} = props;
  let mode = 0;

  mode |= pan && window.SMap.MOUSE_PAN;
  mode |= zoom && window.SMap.MOUSE_ZOOM;
  mode |= wheel && window.SMap.MOUSE_WHEEL;

  const map = useContext<any>(MapContext)
  const mouseControl = new window.SMap.Control.Mouse(mode);

  map.addControl(mouseControl);

  useEffect(() => {
    return () => { map.removeControl(mouseControl) };
  })

  return null;
}

MouseControl.defaultProps = {
  pan: false,
  wheel: false,
  zoom: false,
}

export default MouseControl; 