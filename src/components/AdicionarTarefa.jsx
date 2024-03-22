import { useState } from 'react'
import NovaTarefa from './NovaTarefa.jsx'
import '../css/AdicionarTarefa.css'

export default function AdicionarTarefa() {
    const [criarTarefa, setCriarTarefa] = useState(false);
    const handleClick = () => {
        setCriarTarefa(!criarTarefa);
    }

    return (
        <div className='containerButton'>
            <button onClick={handleClick}>Nova tarefa</button>
            {criarTarefa && <NovaTarefa />}
        </div>
    )
}