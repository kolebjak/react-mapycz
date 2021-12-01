import {useContext, useEffect, useRef} from 'react';
import {MapContext} from '../Map';

interface MouseControlProps {
    pan?: boolean;
    wheel?: boolean;
    zoom?: boolean;
}

const MouseControl = (props: MouseControlProps) => {
    const {pan, wheel, zoom} = props;

    const map = useContext<any>(MapContext);
    const mouseControlRef = useRef(null);

    useEffect(() => {
        const setup = () => {
            if (mouseControlRef.current) {
                map.removeControl(mouseControlRef.current);
            }

            let mode = 0;
            mode |= pan && window.SMap.MOUSE_PAN;
            mode |= zoom && window.SMap.MOUSE_ZOOM;
            mode |= wheel && window.SMap.MOUSE_WHEEL;

            const newMouseControl = new window.SMap.Control.Mouse(mode);

            map.addControl(newMouseControl);
            mouseControlRef.current = newMouseControl;
        };

        setup();

        return () => {
            map.removeControl(mouseControlRef.current);
        };
    });

    return null;
};

MouseControl.defaultProps = {
    pan: false,
    wheel: false,
    zoom: false,
};

export default MouseControl;
