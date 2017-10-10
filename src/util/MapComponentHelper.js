const applyUpdater = (props, sInstance, updaterMap, prevProps) => {
	Object.keys(updaterMap).map((prop) => {
		const nextValue = props[prop],
			prevValue = prevProps[prop];
		if (prevValue !== nextValue) {
			updaterMap[prop](sInstance, nextValue, prevValue, props);
		}
	});
};

const componentConstruct = (props, sInstance, updaterMap) => {
	applyUpdater(props, sInstance, updaterMap, {});
};

const componentDidUpdate = (component, sInstance, updaterMap, prevProps) => {
	applyUpdater(component.props, sInstance, updaterMap, prevProps);
};

export {
	componentConstruct,
	componentDidUpdate,
};
