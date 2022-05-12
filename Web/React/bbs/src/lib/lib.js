import { useState } from "react";


export const useInput = initialValue =>{
            const [value, setvalue] = useState(initialValue);
            const handler = (event) =>{
                setvalue(event.target.value);
            }
            return [value,handler];
        }