 
import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
   

    const IsMounted = useRef(true)

    const [state, setState] = useState({data:[], loading: true, error: null});


    useEffect(() => {
        
        return () => {
            IsMounted.current = false;
        }

    }, [])


    useEffect(() => {

        setState({data:[], loading: true, error: null});
        
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                if( IsMounted.current){
                    setState({
                        data,
                        loading: false,
                        error: null 
                    })
                }               
            })

    },[url])

    return state;
}
