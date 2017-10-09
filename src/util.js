const applyUpdater = (component, sInstance, updaterObj, prevProps) => {
	Object.keys(updaterObj).map((prop) => {
		const nextValue = component.props[prop],
			prevValue = prevProps[prop];
		if (prevValue !== nextValue) {
			updaterObj[prop](sInstance, nextValue, prevValue);
		}
	});
};

const componentDidUpdate = (component, sInstance, updaterObj, prevProps) => {
	applyUpdater(component, sInstance, updaterObj, prevProps);
};

export {
	componentDidUpdate,
};
