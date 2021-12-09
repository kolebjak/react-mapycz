import {useContext, useEffect} from 'react';
import {MarkerLayerContext} from "./MarkerLayer";
import {isMarkerCardRender, isMarkerRender, MarkerCardRender, MarkerProps, MarkerRender} from './types'
import {renderToStaticMarkup} from 'react-dom/server'

const Marker = (props: MarkerProps) => {
    const markerLayer = useContext<any>(MarkerLayerContext);

    const renderMarkerUrl = (url?: string | Element | MarkerRender) => {
        if (isMarkerRender(url)) {
            const marker = document.createElement('div');
            marker.innerHTML = renderToStaticMarkup(url(props));
            return marker;
        }

        return url;
    };

    const resolveOptions = () => {
        const options = props.options;
        if (!options) {
            return undefined;
        }
        if (!options.url) {
            return options;
        }
        return {
            ...options,
            url: renderMarkerUrl(options.url),
        };
    };

    const renderCardPart = (content?: string | MarkerCardRender) => {
        if (isMarkerCardRender(content)) {
            return renderToStaticMarkup(content(props.coords));
        }

        return content;
    };

    const renderCard = () => {
        const card = new window.SMap.Card();

        const cardWidth = props.card?.options?.width;
        const cardHeight = props.card?.options?.height;
        if (cardWidth && cardHeight) {
            card.setSize(cardWidth, cardHeight);
        }

        if (props.card?.header) {
            card.getHeader().innerHTML = renderCardPart(props.card?.header);
        }
        if (props.card?.body) {
            card.getBody().innerHTML = renderCardPart(props.card?.body);
        }
        if (props.card?.footer) {
            card.getFooter().innerHTML = renderCardPart(props.card?.footer);
        }

        sMarker.decorate(window.SMap.Marker.Feature.Card, card);
    };

    const {lng, lat} = props.coords;
    const coords = window.SMap.Coords.fromWGS84(lng, lat);
    const options = resolveOptions();
    const sMarker = new window.SMap.Marker(coords, props.id, options);
    markerLayer?.addMarker(sMarker);

    if (props.card) {
        renderCard();
    }

    useEffect(() => {
        return () => {
            markerLayer.removeMarker(sMarker, true);
        };
    });

    return null;
};

Marker.defaultProps = {
    id: false,
};

export default Marker;
