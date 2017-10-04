import React from 'react';
import PropTypes from 'prop-types';

class AbstractControl extends React.Component {

	constructor() {
		super();
		this.state = {control: null};
	}

	componentWillReceiveProps(nextProps) {
		const {smap} = nextProps;
		if (!this.state.smap && smap) {
			let control = this.createControl(smap, nextProps);
			this.setState({control});
			smap.addControl(control, nextProps);
		}
	}

	createControl(/* smap, props */) {
		throw new Error('Unimplemented method createControl');
	}

	componentWillUnmount() {
		if (this.state.smap) {
			smap.removeControl(this.state.control);
		}
	}

	render() {
		return null;
	}
}

AbstractControl.propTypes = {
	smap: PropTypes.object,
};

export default AbstractControl;