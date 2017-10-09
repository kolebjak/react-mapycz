# Controls

Map control components are direct children of the `Map` component and can be imported from `react-mapycz/controls`, for example:
```javascript
import {MouseControl, KeyboardControl} from 'react-mapycz/controls'
```



## Non-visual Controls

### MouseControl

Enables mouse interaction with the map.

| Property name	| Type 					| Defaults to	| Description 	|
| ---			| ---					| ---			| ---			|
| `pan` 		| bool					| `true`		| If `true`, map's center coordinates can be change by drag'n'drop. |
| `wheel` 		| bool					| `true`		| If `true`, mouse wheel can be used to change zoom level. |
| `zoom`		| bool					| `true`		| If `true`, double-clicking mouse left/right button zooms map in/out. |



### KeyboardControl

Enables keyboard interaction with the map.

| Property name	| Type 					| Defaults to	| Description 	|
| ---			| ---					| ---			| ---			|
| `pan` 		| bool					| `true`		| If `true`, map's center coordinates can be change by cursor keys. |
| `zoom`		| bool					| `true`		| If `true`, + and - keys changes zoom level. |



### SyncControl

Ensures proper map updates when map's container size is changed. If you don't expect any size change of the container, you don't need to use this control.



## Visual Controls

### CompassControl

| Property name		| Type 					| Defaults to		| Description 	|
| ---				| ---					| ---				| ---			|
| `title` 			| string				| `"Posun mapy"`	| Adds a tooltip. |
| **Positioning** |
| `left` 			| number				| `10`				| (pixels) |
| `right` 			| number				|					| (pixels) |
| `top` 			| number				| `10`				| (pixels) |
| `bottom` 			| number				|					| (pixels) |

### ZoomControl

Zoom-in and zoom-button, optionally extended by slider dropdown. Within the slider, particular zoom level labels are displayed if specified.

| Property name		| Type 					| Defaults to					| Description 	|
| ---				| ---					| ---							| ---			|
| `labels` 			| object				| 								| `{zoomLevel: label}` Sets up labels for particular zoom levels displayed within a zoom slider. To add default labels, pass `ZoomControl.DEFAULT_LABELS`. |
| `title` 			| string[]				| `["Přiblížit", "Oddálit"]`	| Adds a tooltip, [zoom-in button, zoom-out button]. |
| `showZoomMenu`	| bool					| `true`						| If `true`, zoom level visualization with a slider is displayed. |
| **Positioning** |
| `left` 			| number				| 								| (pixels) |
| `right` 			| number				| `10`							| (pixels) |
| `top` 			| number				| `10`							| (pixels) |
| `bottom` 			| number				|								| (pixels) |
