import React, {useState} from 'react';
import {useSMap} from "./hooks";

const SMapProvider = <T extends {}>(Component: React.ComponentType<T>) => function (props: T) {
    const [isLoading, setLoading] = useState(true);
    useSMap(() => setLoading(false))

    if (isLoading) {
        return <div>loading...</div>;
    }

    return <Component {...props}/>;
}


export default SMapProvider;