export type MapEvent = {
  data: {
    event: {
      altKey: false;
      altitudeAngle: number;
      azimuthAngle: number;
      bubbles: boolean;
      button: number;
      buttons: number;
      cancelBubble: boolean
      cancelable: boolean;
      clientX: number;
      clientY: number;
      composed: boolean;
      ctrlKey: boolean
      defaultPrevented: boolean
      detail: number;
      eventPhase: number;
      height: number;
      isPrimary: boolean
      isTrusted: boolean;
      layerX: number;
      layerY: number;
      metaKey: boolean
      movementX: number;
      movementY: number;
      offsetX: number;
      offsetY: number;
      pageX: number;
      pageY: number;
      pointerId: number;
      pointerType: string;
      pressure: number;
      returnValue: boolean;
      screenX: number;
      screenY: number;
      shiftKey: boolean
      tangentialPressure: number;
      tiltX: number;
      tiltY: number;
      timeStamp: number;
      twist: number;
      type: string;
      which: number;
      width: number;
      x: number;
      y: number;
    };
  };
  target: any;
  timeStamp: number;
  type: string;
}

export type Coordinates = {
  x: number;
  y: number;
}

export type MarkerCoords = { lng: number, lat: number }
export type MarkerCardRender = ((coords: MarkerCoords) => JSX.Element);
export const isMarkerCardRender = (p?: string | MarkerCardRender): p is MarkerCardRender => typeof p === 'function'

export type MarkerCardConfiguration = {
  header?: string | MarkerCardRender;
  body?: string | MarkerCardRender;
  footer?: string | MarkerCardRender;
  options?: {
      width: number;
      height: number;
  }
}

export enum LineStyle {
  solid = 0,
  dash = 1,
  dot = 2,
  dashDot = 3,
}

export type GeometryOptions = {
  title?: string;
  minDist?: number;
  color?: string;
  opacity?: number;
  width?: number;
  style?: LineStyle;
  outlineColor?: string;
  outlineOpacity?: number;
  outlineWidth?: number;
  outlineStyle?: LineStyle;
}
