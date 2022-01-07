import {useContext, useEffect} from 'react';
import {MapContext} from "../Map";

export interface CompassControlProps {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

const CompassControl = ({ top, left, right, bottom }: CompassControlProps) => {
    const map = useContext<any>(MapContext);
    const compassControl = new window.SMap.Control.Compass();
    map?.addControl(compassControl);

    const controlStyles = compassControl._dom['container'].style;

    // Set position
    controlStyles['top'] = `${top}px`;
    controlStyles['right'] = `${right}px`;
    controlStyles['bottom'] = `${bottom}px`;
    controlStyles['left'] = `${left}px`;

    useEffect(() => {
        return () => { map.removeControl(compassControl) };
    })

    return null;
}

export default CompassControl;