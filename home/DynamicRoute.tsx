import React from 'react';
import styled from "styled-components";
import {CompassControl, KeyboardControl, MouseControl, ZoomControl} from "../src/controls";
import {Map, Marker, MarkerLayer} from "../src";

const SFeatures = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #135200;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DynamicRoute = () => {
  return (
    <SFeatures>
      <div style={{width: '40%'}}>
        <Map height="500px" center={{lat: 50.0755, lng: 14.4378}}>
          <KeyboardControl/>
          <ZoomControl/>
          <MouseControl zoom={true} pan={true} wheel={true}/>
          <CompassControl right={10} top={50}/>
          <MarkerLayer>
            <Marker coords={{lat: 50.0755, lng: 14.4378}}/>
          </MarkerLayer>
        </Map>
      </div>
      <div style={{width: '50%'}}>
        <h2>Dynamic routes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius diam sed sem placerat, et maximus
          dui tincidunt. Vestibulum luctus urna lobortis ante imperdiet, vitae consequat magna maximus.</p>
      </div>
    </SFeatures>
  )
}

export default DynamicRoute;