'use client'
import { useEffect, useState } from "react"

export default function Contador() {

// Variables 

const [contador, setContador] = useState(0);

// Functions 

function incrementar()
{
    return setContador(contador + 1);
}
function subtract()
{
    return setContador(contador - 1);
}
function reset()
{
    return setContador(0);
}
useEffect(() => setContador(-2),[]);

// rendering

return (
     <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contador</h2>
            <p>Contador vai em <span> {contador} </span>!</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
           onClick = {incrementar} 
           >
                contar
            </button>
            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
           onClick = {subtract} 
           >
                subtrair
            </button>
            <button
                className="m-2 p-8 bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
           onClick = {reset} 
           >
                reset
            </button>
        </section>
)
}
