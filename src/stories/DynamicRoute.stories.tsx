import React from 'react';
import {Map, MarkerLayer, Path, PathLayer, PathMarker} from '../index';
import {MouseControl, CompassControl, ZoomControl, KeyboardControl} from '../controls';
import {storiesOf} from "@storybook/react";
import { withKnobs, array, select, boolean, number, color } from '@storybook/addon-knobs';

export const examplePath = [{'lat': 49.5146483, 'lng': 18.5291239}, { 'lat': 49.5440406, 'lng': 18.4509133 }, {'lat': 49.5457367, 'lng': 18.4479764}];

const colorLabel = 'Path color';
const colorDefaultValue = '#f00';

const pathWidthLabel = 'Path width';
const pathDefaultValue = 3;

const pathCoordsLabel = 'Path coords (array of objects Array<{ lng: number, lat: number }>)';
const pathCoordsDefaultValue = examplePath;

const criterionLabel = 'Criterion';
const criterionOptions = {
  'Fast (car)': 'fast',
  'Short (car)': 'short',
  Bike1: 'bike1',
  Bike2: 'bike2',
  Bike3: 'bike3',
  Turist1: 'turist1',
  Turist2: 'turist2',
};
const criterionDefaultValue = 'turist1';

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
      <Path coords={array(pathCoordsLabel, pathCoordsDefaultValue)} criterion={select(criterionLabel, criterionOptions, criterionDefaultValue)} color={color(colorLabel, colorDefaultValue)} width={number(pathWidthLabel, pathDefaultValue)} dynamicRoute={boolean('Dynamic', true)}/>
    </PathLayer>
  </Map>
);


const stories = storiesOf('Map', module);
stories.addDecorator(withKnobs)
stories.add('Dynamic route with markers', () => <DynamicRouteStories />);