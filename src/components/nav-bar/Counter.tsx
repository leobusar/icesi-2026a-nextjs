"use client"
import { useCounterStore } from "@/providers/counter-store-provider";
import { CounterStore } from "@/store/counterStore";

export const CounterNavBar = () => 
{
    const {counter} = useCounterStore((state:CounterStore)=> state);
    return (
            <div className="flex flex-1">
                {counter}
            </div>
    )
}