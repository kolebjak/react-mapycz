# react-mapycz

![Node.js CI](https://github.com/flsy/react-mapycz/workflows/Node.js%20CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6e1c27394342aeeceb2/maintainability)](https://codeclimate.com/github/flsy/react-mapycz/maintainability)

Mapy.cz in React

# Installation

`yarn add react-mapycz` or `npm i react-mapycz`

# Demo

http://falsy.cz/react-mapycz/

# Run Storybook
`npm start start-storybook -p 9009`

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

# License
This library is using Mapy.cz API. By its usage you acknowledge that you agree to the [Terms and Conditions](http://api.mapy.cz/#pact). 


  
