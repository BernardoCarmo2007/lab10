'use client'
import { useEffect, useState } from "react"

export default function Contador() {

    // Gestão de Estados
const [contador, setContador] = useState(0);

//Funcoes 

function incrementa()
{
   return setContador(contador + 1)
}
// USE efet

useEffect(() => {alert("Olá")},[])
    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contador</h2>
            <p>Contador vai em <span> {contador} </span>!</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
           onClick = {incrementa} 
           >
                
                Aumenta
            </button>
        </section>
    )
}
