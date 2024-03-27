import { useState } from 'react'
import '../css/Tarefa.css'

export default function Tarefa({ tarefa, atualizarTarefa }){
    const [concluirTarefa, setConcluirTarefa] = useState(tarefa.estado);

    const finalizarTarefa = () => {
        setConcluirTarefa(true);
        atualizarTarefa(tarefa.id, true);
    };

    return (
        <div className='containerTarefa'>
            <li className='containerTarefa__item'>Tarefa: {tarefa.nome} <br/>Data: {tarefa.data} <br/>Estado: {!tarefa.state ? 'Incompleta' : 'Completa'} <br/> <button className='containerTarefa__botao' onClick={finalizarTarefa}>{!tarefa.estado ? 'Finalizar' : 'Completa'}</button></li>
        </div>
    )
}