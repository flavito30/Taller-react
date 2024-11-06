// import { useState } from "react"

import { counter } from "../hooks/counter"

export const Counter = () => {

    // const [count, setCount] = useState(0);

    // const aumentar = () => {
    // setCount(count+1);
    // }

    // const disminuir = () => {
    //     if(count===0){
    //        return
    //     }
    //     setCount(count-1);
    // }

    const{count,increment,decrement} =counter();
    
    return(
        <div className="flex flex-col justify-center h-screen items-center">
            <h1 className="text-5xl">Counter</h1>
            <h2 className="text-8xl">{count}</h2>
            <div className="flex flex-row gap-4">
                <button onClick={decrement}  className="  bg-red-600 rounded-lg p-2 " > Disminuir</button>
                <button onClick={increment} className=" bg-blue-700 lg:bg-purple-600 sm:bg-green-600 rounded-lg p-2">Agregar</button>
            </div>
        </div>
    )


}


