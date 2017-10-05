import React from 'react';
import PropTypes from 'prop-types';

class AbstractControl extends React.Component {

	constructor() {
		super();
		this.control = null;
		this.state = {
			scontrolCreated: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		const {smap} = nextProps;
		if (!this.state.scontrolCreated && smap) {
			let control = this.createControl(smap, nextProps);
			smap.addControl(control, nextProps);
			this.control = control;
			this.setState({
				scontrolCreated: true,
			});
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