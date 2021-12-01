import {useContext, useEffect, useRef} from 'react';
import {MapContext} from '../Map';

interface MouseControlProps {
    pan?: boolean;
    wheel?: boolean;
    zoom?: boolean;
    disabled?: boolean;
}

const MouseControl = (props: MouseControlProps) => {
    const {pan, wheel, zoom, disabled} = props;

    const map = useContext<any>(MapContext);
    const mouseControlRef = useRef(null);

    useEffect(() => {
        const setup = () => {
            if (mouseControlRef.current) {
                map.removeControl(mouseControlRef.current);
            }

            let mode = 0;
            if (!disabled) {
                mode |= pan && window.SMap.MOUSE_PAN;
                mode |= zoom && window.SMap.MOUSE_ZOOM;
                mode |= wheel && window.SMap.MOUSE_WHEEL;
            }

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
    disabled: false,
};

export default MouseControl;
