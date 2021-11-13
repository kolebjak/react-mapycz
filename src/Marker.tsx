import {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "./MarkerLayer";
import { MarkerCardConfiguration } from './types';
import { renderToStaticMarkup } from 'react-dom/server'

type MarkerCoords = { lng: number, lat: number };
type MarkerCardRender = (coords: MarkerCoords) => JSX.Element;

interface MarkerProps {
    coords: MarkerCoords
    card?: MarkerCardConfiguration | MarkerCardRender;
}

const isMarkerCardRender = (p: MarkerProps['card']): p is MarkerCardRender => typeof p === 'function'

const Marker = (props: MarkerProps) => {

    const renderCard = () => {
        const card = new window.SMap.Card();

        if(isMarkerCardRender(props.card)) {
            card.getBody().innerHTML = renderToStaticMarkup(props.card(props.coords));
            return sMarker.decorate(window.SMap.Marker.Feature.Card, card);
        }

        const cardWidth = props.card?.options?.width
        const cardHeight = props.card?.options?.height
        if(cardWidth && cardHeight) {
            card.setSize(cardWidth, cardHeight);
        }

        card.getHeader().innerHTML = props.card?.header;
        card.getBody().innerHTML = props.card?.body;
        card.getFooter().innerHTML = props.card?.footer;
        sMarker.decorate(window.SMap.Marker.Feature.Card, card);
    }

    const markerLayer = useContext<any>(MarkerLayerContext)

    const { lng, lat } = props.coords;

    const coords = window.SMap.Coords.fromWGS84(lng, lat);
    const sMarker = new window.SMap.Marker(coords, false);
    markerLayer?.addMarker(sMarker);

    if (props.card) {
        renderCard()
    }

    useEffect(() => {
        return () => {
            markerLayer.removeMarker(sMarker, true)
        };
    })

    return null;
}

export default Marker;
