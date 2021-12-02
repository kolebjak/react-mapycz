import React, {useState} from 'react';
import {useSMap} from "./hooks";

export type SMapProviderProps<T> = T & {
    loadingElement?: React.ReactNode;
}

const SMapProvider = <T extends {}>(Component: React.ComponentType<T>) =>
    function (props: SMapProviderProps<T>) {
        const [isLoading, setLoading] = useState(true);
        useSMap(() => setLoading(false));
        const {loadingElement, ...rest} = props;

        if (isLoading) {
            return loadingElement
                ? <>{loadingElement}</>
                : <div>loading...</div>;
        }

        return <Component {...rest as T}/>;
    }

export default SMapProvider;