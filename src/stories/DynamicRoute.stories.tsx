import React from 'react';
import {Map, Marker, MarkerLayer, Path, PathLayer, PathMarker} from '../index';
import {MouseControl, CompassControl, ZoomControl, KeyboardControl} from '../controls';
import {storiesOf} from "@storybook/react";

export const examplePath = [{'lat': 49.536, 'lng': 18.499}, {
  'lat': 49.529,
  'lng': 18.486,
}, {'lat': 49.546, 'lng': 18.446}];

const DynamicRouteStories = () => (
  <Map height="90vh" center={{lat: 49.536, lng: 18.499}}>
    <KeyboardControl/>
    <ZoomControl/>
    <MouseControl zoom={true} pan={true} wheel={true}/>
    <CompassControl right={10} top={50}/>
    <MarkerLayer>
      <PathMarker coords={examplePath} />
    </MarkerLayer>
    <PathLayer>
      <Path coords={examplePath} dynamicRoute/>
    </PathLayer>
  </Map>
);


storiesOf('Map', module).add('Dynamic route with markers', () => <DynamicRouteStories />);