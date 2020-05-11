import {useContext} from 'react';
import {MapContext} from "../Map";

const MouseControl = (props: any) => {
  const {pan, wheel, zoom} = props;
  let mode = 0;

  // @ts-ignore
  mode |= pan && SMap.MOUSE_PAN;
  // @ts-ignore
  mode |= zoom && SMap.MOUSE_ZOOM;
  // @ts-ignore
  mode |= wheel && SMap.MOUSE_WHEEL;


  const map = useContext<any>(MapContext)
  // @ts-ignore
  const mouseControl = new SMap.Control.Mouse(mode);

  map.addControl(mouseControl);
  // TODO:
  // componentWillUnmount() {
  // 	this.context.sMap.removeControl(this.sControl);
  // }

  return null;
}

MouseControl.defaultProps = {
  pan: true,
  wheel: true,
  zoom: true,
}

export default MouseControl; 