# react-mapycz
Mapy.cz in React

# Installation

`yarn add react-mapycz` or `npm i react-mapycz`

# Usage

Simple Map
```javascript
import { Map } from 'react-mapycz'

const App = () => <Map />
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