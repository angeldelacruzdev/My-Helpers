import queryString from 'query-string';
import {
    useLocation
  } from "react-router-dom";

export const userUrlQuery = () => {
    const  url =  queryString.parseUrl(  useLocation().search  ).query;
    return [url]
}

 
