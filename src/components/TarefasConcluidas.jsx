import '../css/BotoesTarefa.css'

export default function TarefasConcluidas({ props }) {
    const Tarefas = props.lista.map((tarefa, index) => (
        <li key={index}>
            {tarefa}
        </li>
    ))

    return (
        <div className='containerButton'>
            <ul>{Tarefas}</ul>
        </div>
    )
}