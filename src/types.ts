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

export type MarkerCardConfiguration = {
  header?: string;
  body?: string;
  footer?: string;
  options?: {
      width: number;
      height: number;
  }
}
