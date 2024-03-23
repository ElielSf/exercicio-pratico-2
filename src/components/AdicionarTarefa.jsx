import { useState } from 'react'
import NovaTarefa from './NovaTarefa.jsx'
import '../css/BotoesTarefa.css'
import TarefasConcluidas from './TarefasConcluidas.jsx';

export default function AdicionarTarefa() {
    const [textTarefa, setTextTarefa] = useState('');
    const [Tarefas, setTarefas] = useState([]);

    const criarTarefa = () => {
        let listaTarefas;
        if (textTarefa !== '') {
            setTarefas([...Tarefas,{ text:textTarefa }]);
            listaTarefas = props.Tarefas;
            setTextTarefa[''];
        }
    }

    return (
        <div className='containerButton'>
            <h1></h1>
            <input type="text" value={textTarefa} onChange={(e)=>setTextTarefa(e.target.value)} />
            <button onClick={criarTarefa}>Enviar Tarefa</button>
            <TarefasConcluidas lista={listaTarefas} />
        </div>
    )
}