import { useContext } from 'react';
import { MapContext } from "../Map";
import BaseLayers from '../BaseLayers'

export type LayoutControlProps = {
    layers: BaseLayers[]
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

const LayoutControl = ({ layers, left, top, bottom, right }: LayoutControlProps) => {
    const map = useContext<any>(MapContext);
    const layerControl = new window.SMap.Control.Layer({ width: 65, items: 2, page: 2 });

    layers.forEach((layer) => {
        map.addDefaultLayer(layer);
        layerControl.addDefaultLayer(layer);
    })

    map.addControl(layerControl, { left: `${left}px`, top: `${top}px`, right: `${right}px`, bottom: `${bottom}px` });

    return null;
}

LayoutControl.defaultProps = {}

export default LayoutControl;
