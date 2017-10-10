import React from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';

const SCRIPT_LOADING_NONE = 'NONE',
	SCRIPT_LOADING_RUNNING = 'RUNNING',
	SCRIPT_LOADING_DONE = 'DONE';

const MapyCzProvider = (Component) => {

	class Container extends React.Component {

		static displayName = 'MapyCzProvider'
		
		static propTypes = {
			scriptUrl: PropTypes.string,
			poi: PropTypes.bool,
			loader: PropTypes.func,
		}

		static defaultProps = {
			scriptUrl: 'https://api.mapy.cz/loader.js',
			loader: () => <div>Načítání</div>,
		}

		constructor(props, context) {
			super(props, context);
			const isSMapDefined = typeof SMap !== 'undefined';

			this.state = {
				scriptLoadingState: isSMapDefined ? SCRIPT_LOADING_DONE : SCRIPT_LOADING_NONE,
			};
		}

		onScriptLoaded = this.onScriptLoaded.bind(this)

		onScriptLoaded() {
			Loader.async = true;
			Loader.load(null, {poi: this.props.poi}, () => {
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

			if (typeof SMap === 'undefined') {
				this.loadScript();
			}
			else {
				this.setState({
					scriptLoadingState: SCRIPT_LOADING_DONE,
				});
			}

		}

		render() {
			const Loader = this.props.loader;

			if (this.state.scriptLoadingState === SCRIPT_LOADING_DONE) {
				return <Component {...this.props}/>;
			}
			return <Loader />;
		}

	}

	return Container;
};

export default MapyCzProvider;