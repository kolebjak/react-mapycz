import React, {useState} from 'react';
import {useSMap} from "./hooks";

interface SMapProviderProps {
    loadingElement?: React.ReactNode;
}

const SMapProvider = <T extends {}>(Component: React.ComponentType<T>) =>
    function (props: T & SMapProviderProps) {
        const [isLoading, setLoading] = useState(true);
        useSMap(() => setLoading(false));

        if (isLoading) {
            return props.loadingElement
                ? <>{props.loadingElement}</>
                : <div>loading...</div>;
        }

        return <Component {...props}/>;
    }

export default SMapProvider;