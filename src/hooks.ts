import {useEffect} from 'react';
import {LoaderApiConfig} from "./types";

export const useSMap = (
    cb: any,
    loaderApiConfig?: LoaderApiConfig | null,
) => {
    useEffect(() => {

        const onload = () => {
            // @ts-ignore
            window.Loader.async = true;
            // @ts-ignore
            window.Loader.load(null, loaderApiConfig, cb);
        }

        const script = document.createElement('script');
        script.src = 'https://api.mapy.cz/loader.js';
        script.async = true;
        script.onload = onload;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
};