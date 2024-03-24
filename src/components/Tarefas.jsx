import { useState } from 'react'
import '../css/Tarefas.css'

export default function Tarefas() {
    const [textTarefa, setTextTarefa] = useState('');
    const [dateTarefa, setDateTarefa] = useState('')
    const [Tarefas, setTarefas] = useState([]);
    const [total, setTotal] = useState(0);

    const criarTarefa = () => {
        if (dateTarefa !== '') {
            if (textTarefa !== '') {
                setTarefas([...Tarefas,{ text: textTarefa, date: dateTarefa }]);
                setTotal((total) => total += 1);
                setTextTarefa('');
                setDateTarefa('');
            }
        }
    }

    return (
        <div className='container-tasks'>
            <div className='container-tasks__wrapperCriar'>
                <h3 className='wrapper__title'>Digite uma tarefa:</h3>
                <input className='wrapper__input' type="text" value={textTarefa} onChange={(e)=>setTextTarefa(e.target.value)} />
                <input className='wrapper__input' type="date" value={dateTarefa} onChange={(e)=>setDateTarefa(e.target.value)} />
                <button className='wrapper__button' onClick={criarTarefa}>Adicionar Tarefa</button>
            </div>
            <div className='container-tasks__wrapperTotal'>
                <h3 className='wrapper__total'>Total de tarefas: {total}</h3>
            </div>
            <div className='container-tasks__wrapperItems'>
                <ol className='wrapper__items'>
                    {Tarefas.map((tarefa, index) => 
                    <li key={index}>{tarefa.text} | {tarefa.date}</li>)}
                </ol>
            </div>
        </div>
    )
}