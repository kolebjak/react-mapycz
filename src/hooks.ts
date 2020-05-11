import {useEffect} from 'react';

export const useSMap = (cb:any) => {
    useEffect(() => {

        const onload = () => {
            // @ts-ignore
            window.Loader.async = true;
            // @ts-ignore
            window.Loader.load(null, null, cb);
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