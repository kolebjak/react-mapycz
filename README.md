# react-mapycz

![Node.js CI](https://github.com/flsy/react-mapycz/workflows/Node.js%20CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c2fb679fd2700b53a83/maintainability)](https://codeclimate.com/github/flsy/react-mapycz/maintainability)

Mapy.cz in React

# Installation

`yarn add react-mapycz` or `npm i react-mapycz`

# Demo

http://falsy.cz/react-mapycz/

# Run preview
- Install: `yarn`
- Run preview: `yarn start`
- Previre will be available on http://localhost:9000/

# Usage 

## Map
Show a simple map. 
```javascript
import { Map } from 'react-mapycz'

const App = () => <Map />
```

You can pass `center` prop to the `Map` to set default view coordinates. 
ex. `center={{lat: 55.604890000000005, lng: 8.97171}}`

## Markers

Show markers on a map. Markers have to be wrapped in MarkerLayer. 

```javascript
import { Map, MarkerLayer, Marker } from 'react-mapycz'

const App = () => (
    <Map center={{lat: 55.604890000000005, lng: 8.97171}}>
        <MarkerLayer>
            <Marker coords={{lat: 55.60501000000001, lng: 8.97171}} />
            <Marker coords={{lat: 55.547290000000004, lng: 8.897590000000001}} />
        </MarkerLayer>
    </Map>
)
```

### Marker card

You can display marker card on marker click. There are two approaches:

**Use string to render card items**<br>
```typescript jsx
<Marker 
  coords={{lat: 50.0755, lng: 14.4378}} 
  card={{
    header: "<strong>Card header</strong>",
    body: "<p>Card body</p><img src='https://via.placeholder.com/150x60/454545/eb4034'/>",
    footer: "Card footer",
    options: {
      width: 200,
      height: 200,
    }
  }} 
/>
```

**Use your custom function to render card items.**<br>
```typescript jsx
<Marker
  coords={{lat: 50.0755, lng: 14.4378}}
  card={{
    header: ({ lat, lng }) => <strong>Card header {lat} {lng}</strong>,
    body:  ({ lat, lng }) => <><p>Card body {lat} {lng}</p><img src='https://via.placeholder.com/150x60/454545/eb4034'/></>,
    footer: "Card footer",
    options: {
      width: 200,
      height: 200,
    }
  }}
/>
```

## Path

Displays a path from list of { lat, lng }. 

```javascript
import { Map, PathLayer, Path } from 'react-mapycz'

const App = () => (
    <Map>
        <PathLayer>
            <Path coords={[
                    {'lat': 55.604890000000005, 'lng': 8.97171},
                    {'lat': 55.60501000000001, 'lng': 8.97179},
                    {'lat': 55.605070000000005, 'lng': 8.971820000000001},
                    {'lat': 55.60512000000001, 'lng': 8.97183}, 
                    {'lat': 55.60517, 'lng': 8.971810000000001}
                ]} 
            />
        </PathLayer>
    </Map>
)
```

## Controls

### Compass control

Display control compass on the map and control the movement by clicking on it. 
```javascript
import { Map, CompassControl } from 'react-mapycz'

const App = () => (
    <Map>
        <CompassControl />
    </Map>
)
```

### Mouse control

Move the map by mouse. You can set zoom to `boolean` to enable / disable zooming by mouse scrolling. 
```javascript
import { Map, MouseControl } from 'react-mapycz'

const App = () => (
    <Map>
        <MouseControl zoom={true} />
    </Map>
)
```

### Keyboard control

Control the map by keyboard arrows. 
```javascript
import { Map, KeyboardControl } from 'react-mapycz'

const App = () => (
    <Map>
        <KeyboardControl />
    </Map>
)
```

### Sync control

Synchronize map size by its parent element.
```javascript
import { Map, SyncControl } from 'react-mapycz'

const App = () => (
    <Map>
        <SyncControl />
    </Map>
)
```
You can pass `options` prop to the `SyncControl` to set `bottomSpace` (in pixels) and `resizeTimeout` (in miliseconds).


## POI layer

The map can automatically fetch nearby points of interest.

```javascript
import { Map, POILayer } from 'react-mapycz'

const App = () => (
    <Map loaderApiConfig={{poi: true}}>
        <POILayer />
    </Map>
)

# License
This library is using Mapy.cz API. By its usage you acknowledge that you agree to the [Terms and Conditions](http://api.mapy.cz/#pact). 


  
