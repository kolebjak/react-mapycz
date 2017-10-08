import React from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';

const SCRIPT_LOADING_NONE = 'NONE',
	SCRIPT_LOADING_RUNNING = 'RUNNING',
	SCRIPT_LOADING_DONE = 'DONE';

const WithMapyCz = (Component) => {

	class Container extends React.Component {

		static displayName = 'WithMapyCz'
		
		static propTypes = {
			scriptUrl: PropTypes.string.isRequired,
		}

		state = {
			scriptLoadingState: SCRIPT_LOADING_NONE,
		}

		onScriptLoaded = this.onScriptLoaded.bind(this);

		onScriptLoaded() {
			window.Loader.async = true;
			window.Loader.load(null, null, () => {
				this.setState({
					scriptLoadingState: SCRIPT_LOADING_DONE,
				});
			});
		}
		
		loadScript() {
			const {scriptUrl} = this.props;
			const scriptElement = document.createElement('script');
			scriptElement.setAttribute('src', scriptUrl);
			scriptElement.addEventListener('load', this.onScriptLoaded);
			document.head.appendChild(scriptElement);
			
			this.setState({
				scriptLoadingState: SCRIPT_LOADING_RUNNING,
			});
		}

		componentDidMount() {
			const {scriptLoadingState} = this.state;

			if (scriptLoadingState !== SCRIPT_LOADING_NONE || !canUseDOM) {
				return;
			}

			if (typeof window.SMap === 'undefined') {
				this.loadScript();
			}
			else {
				this.setState({
					scriptLoadingState: SCRIPT_LOADING_DONE,
				});
			}

		}

		render() {
			if (this.state.scriptLoadingState === SCRIPT_LOADING_DONE) {
				return <Component {...this.props}/>;
			}
			return null;
		}

	}

	return Container;
};

export default WithMapyCz;