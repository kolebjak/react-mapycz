import {useContext} from 'react';
import {MapContext} from "./Map";
import BaseLayers from "./BaseLayers";
import {MarkerLayerOptions} from "./types";

export interface POILayerProps {
    id?: string | null;
    options?: MarkerLayerOptions;
}

const POILayer = (props: POILayerProps) => {
    const map = useContext<any>(MapContext)

    const options = resolveOptions(props.options);
    const poiLayer = new window.SMap.Layer.Marker(
        props.id,
        options,
    );
    map.addLayer(poiLayer).enable();

    try {
        const dataProvider = map.createDefaultDataProvider();
        dataProvider.setOwner(map);
        dataProvider.addLayer(poiLayer);
        dataProvider.setMapSet(BaseLayers.TURIST_NEW);
        dataProvider.enable();
    } catch (e) {
        console.error(
            "You are trying to use a POI layer without setting up the POI api."
            + " You need to pass 'loaderApiConfig' with poi set to 'true' to the Map component to enable it."
        );
    }

    return null;
}

function resolveOptions(options?: MarkerLayerOptions): MarkerLayerOptions {
    return {
        poiTooltip: true,
        ...options,
    };
}

export default POILayer;