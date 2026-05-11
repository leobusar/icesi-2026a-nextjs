"use client"

import { useCounterStore } from "@/providers/counter-store-provider";
import { CounterStore } from "@/store/counterStore";

//import {useState} from "react"; 

interface Props {
    value?:number; 
}

export const CartCounter = ({value=0}: Props) => {
    //const [count, setCount] = useState(value);
    const {counter, decrement, increment} = useCounterStore((state:CounterStore)=>state);

    return (
        <div className="flex items-center justify-center w-10 h-10">
            <span className="text-2xl">{counter}</span>
            <button className="flex items-center justify-center p-2 rounded bg-gray-900 text-white transition-all m-2 hover:bg-gray-600" onClick={decrement}>  -  </button>
            <button className="flex items-center justify-center p-2 rounded bg-gray-900 text-white transition-all m-2 hover:bg-gray-600" onClick={increment}>  +  </button>
        </div>
    )


}