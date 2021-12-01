import {useContext, useEffect} from 'react';
import {MapContext} from "../Map";

interface SyncControlOptions {
    bottomSpace?: number;
    resizeTimeout?: number;
}

interface SyncControlProps {
    options?: SyncControlOptions;
}

const SyncControl = (props: SyncControlProps) => {
    const map = useContext<any>(MapContext)

    useEffect(() => {
        const sync = new window.SMap.Control.Sync(props.options);
        map.addControl(sync);
    });

    return null;
}

export default SyncControl;