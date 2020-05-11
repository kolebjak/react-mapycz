import {useEffect} from 'react';

export const useSMap = cb => {
    useEffect(() => {

        const onload = () => {
            window.Loader.async = true;
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