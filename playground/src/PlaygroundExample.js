import React from 'react';
import Map, {MapyCzProvider} from 'react-mapycz';
import {MouseControl, KeyboardControl, ZoomControl, CompassControl, SyncControl} from 'react-mapycz/controls';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class PlaygroundExample extends React.Component {

	state = {
		open: false,
		controls: {
			zoom: true,
			compass: true,
			mouse: {
				pan: true,
				zoom: true,
				wheel: true,
			},
			keyboard: {
				pan: true,
				zoom: true,
			},
		},
		anchorEl: null,
	}

	openControlMenu = (event) => {
		this.setState({
			anchorEl: event.target,
			open: true,
		});
	}

	onMenuClose = () => {
		this.setState({
			open: false,
		});
	}

	onControlPropChange = (prop, device) => () => {
		const controls = {...this.state.controls};
		if (device) {
			controls[device][prop] = !this.state.controls[device][prop];
		}
		else {
			controls[prop] = !this.state.controls[prop];
		}
		this.setState({controls});
	}

	render() {
		const {controls} = this.state;
		return <div>
			<Toolbar>
				<ToolbarGroup lastChild={true}>
					<Popover
						open={this.state.open}
						anchorEl={this.state.anchorEl}
						onRequestClose={this.onMenuClose}>
						<Menu desktop={true}>
							<MenuItem primaryText="Zoom" insetChildren={true}  checked={controls.zoom} onClick={this.onControlPropChange('zoom')} />
							<MenuItem primaryText="Compass" insetChildren={true}  checked={controls.compass} onClick={this.onControlPropChange('compass')} />
							<MenuItem primaryText="Mouse Interactions" rightIcon={<ArrowDropRight />} insetChildren={true} menuItems={
								Object.keys(controls.mouse).map((mouseProp) =>
									<MenuItem key={mouseProp} insetChildren={true} primaryText={mouseProp} checked={controls.mouse[mouseProp]} onClick={this.onControlPropChange(mouseProp, 'mouse')}/>
								)} />
							<MenuItem primaryText="Keyboard Interactions" rightIcon={<ArrowDropRight />} insetChildren={true} menuItems={
								Object.keys(controls.keyboard).map((kbProp) =>
									<MenuItem key={kbProp} insetChildren={true} primaryText={kbProp} checked={controls.keyboard[kbProp]} onClick={this.onControlPropChange(kbProp, 'keyboard')}/>
								)} />
						</Menu>
					</Popover>
					<FlatButton label="Controls" onClick={this.openControlMenu}/>
					<FlatButton label="Base Layers"/>
					<ToolbarSeparator />
				</ToolbarGroup>
			</Toolbar>
			<Map height="90vh">
				<SyncControl/>
				<MouseControl {...controls.mouse} />
				<KeyboardControl {...controls.keyboard} />
				{controls.zoom && <ZoomControl title={['Zoom in', 'Zoom out']} showZoomMenu={false} />}
				{controls.compass && <CompassControl title="Move" />}
			</Map>
		</div>;
	}
}

export default MapyCzProvider(PlaygroundExample);