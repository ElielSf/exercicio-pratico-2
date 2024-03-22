import { useState } from 'react'
import '../css/AdicionarTarefa.css'

export default function AdicionarTarefa() {
    //const[novaTarefa, setNovaTarefa] = useState;
    const novaTarefa = () => {
        console.log('a');
    }

    return (
        <div className='containerButton'>
            <button onClick='novaTarefa'>a</button>
        </div>
    )
}