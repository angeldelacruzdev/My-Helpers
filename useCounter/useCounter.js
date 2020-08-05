import {useState} from 'react'

export const useCounter = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = () =>{
        setCounter(counter + 1);
    }
    const decrement = () =>{
        if(counter > 10 )  setCounter(counter - 1);
    }
    const reset = () =>{
        setCounter( 10 )
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
