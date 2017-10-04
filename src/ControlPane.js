import React from 'react';
import PropTypes from 'prop-types';

class ControlPane extends React.Component {

	render() {
		if (this.props.children) {
			return <div>
				{
					React.Children.map(this.props.children, (child) =>
						React.cloneElement(child, {
							smap: this.props.smap,
							key: child.type.name,
						})
					)
				}
			</div>;
		}
		return null;
	}

}

ControlPane.propTypes = {
	children: PropTypes.node,
	smap: PropTypes.object,
};

export default ControlPane;