import React, {useState} from 'react';
import {useSMap} from "react-mapycz/hooks";

const SMapProvider = (Component) => function (props) {
    const [isLoading, setLoading] = useState(true);
    useSMap(() => setLoading(false))

    if (isLoading) {
        return <div>loading...</div>;
    }

    return <Component {...props}/>;
}


export default SMapProvider;