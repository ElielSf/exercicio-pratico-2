import { useState } from 'react'
import Tarefa from './Tarefa.jsx'
import '../css/Tarefas.css'

export default function Tarefas() {
    const [textTarefa, setTextTarefa] = useState('');
    const [dateTarefa, setDateTarefa] = useState('');
    const [Tarefas, setTarefas] = useState([]);
    const [total, setTotal] = useState(0);
    const dataAtual = new Date().toLocaleDateString();

    const criarTarefa = () => {
        if (dateTarefa !== '') {
            const partesData = dateTarefa.split("-");
            const dataFormatada = new Date(partesData[0], partesData[1] - 1, partesData[2]).toLocaleDateString('pt-BR');
            if (textTarefa !== '') {
                setTarefas([...Tarefas,{ text: textTarefa, date: dataFormatada }]);
                setTotal((total) => total += 1);
                if (dataFormatada < dataAtual) {
                    
                }
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
                <input className='wrapper__input' type="date" max={dataAtual} value={dateTarefa} onChange={(e)=>setDateTarefa(e.target.value)} />
                <button className='wrapper__button' onClick={criarTarefa}>Adicionar Tarefa</button>
            </div>
            <div className='container-tasks__wrapperTotal'>
                <h3 className='wrapper__total'>Total de tarefas: {total}</h3>
            </div>
            <div className='container-tasks__wrapperItems'>
                <ol className='wrapper__items'>
                    {Tarefas.map((tarefa, index) => 
                    <Tarefa key={index} 
                    tarefa={{
                        nome: tarefa.text,
                        data: tarefa.date
                    }} />)}
                </ol>
            </div>
        </div>
    )
}

/*<li key={index}>Tarefa: {tarefa.text} <br/>
                    Data: {tarefa.date} <br/>
                    Data Atual: {dataAtual}</li>)}*/