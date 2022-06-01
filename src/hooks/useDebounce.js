import { useEffect, useState } from 'react';

const useDebounce = (value,delay) => {
    const [debounceValue,setDebounceValue] = useState(value)
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(handler)
        }
    },[value])
    return (
        debounceValue
    );
};

export default useDebounce;