import {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "./MarkerLayer";
import { isMarkerCardRender, MarkerCardConfiguration, MarkerCardRender } from './types'
import { renderToStaticMarkup } from 'react-dom/server'

export interface MarkerProps {
    coords: { lng: number, lat: number }
    card?: MarkerCardConfiguration;
}

const Marker = (props: MarkerProps) => {
    const renderCardPart = (content?: string | MarkerCardRender) => {
        if(isMarkerCardRender(content)) {
            return renderToStaticMarkup(content(props.coords))
        }

        return content;
    }

    const renderCard = () => {
        const card = new window.SMap.Card();

        const cardWidth = props.card?.options?.width
        const cardHeight = props.card?.options?.height
        if(cardWidth && cardHeight) {
            card.setSize(cardWidth, cardHeight);
        }

        card.getHeader().innerHTML = renderCardPart(props.card?.header);
        card.getBody().innerHTML = renderCardPart(props.card?.body);
        card.getFooter().innerHTML = renderCardPart(props.card?.footer);
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
