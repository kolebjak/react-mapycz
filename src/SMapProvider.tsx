import React, {useState} from 'react';
import {useSMap} from "./hooks";
import {LoaderApiConfig} from './types';

export type SMapProviderProps<T> = T & {
    loadingElement?: React.ReactNode;
    loaderApiConfig?: LoaderApiConfig | null;
}

const SMapProvider = <T extends {}>(Component: React.ComponentType<T>) =>
    function (props: SMapProviderProps<T>) {
        const {loadingElement, loaderApiConfig, ...rest} = props;

        const [isLoading, setLoading] = useState(true);
        useSMap(() => setLoading(false), loaderApiConfig);

        if (isLoading) {
            return loadingElement
                ? <>{loadingElement}</>
                : <div>loading...</div>;
        }

        return <Component {...rest as T}/>;
    }

export default SMapProvider;