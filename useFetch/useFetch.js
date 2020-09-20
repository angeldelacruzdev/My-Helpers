import { useState, useEffect, useRef } from "react";

export const useFetch = (url, method) => {
  const IsMounted = useRef(true);

  const [state, setState] = useState({ data: [], loading: true, error: null });

  useEffect(() => {
    return () => {
      IsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    setState({ data: [], loading: true, error: null });

    const myInit = {
      method,
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json', 
        'Authorization':  `Bearer ${token}`,
      },
       
    };

    const myRequest = new Request(url, myInit);

    fetch(myRequest)
      .then((resp) => resp.json())
      .then((data) => {
        if (IsMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      });
  }, [url, method]);

  return state;
};
