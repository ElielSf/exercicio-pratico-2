import '../css/NovaTarefa.css'

export default function NovaTarefa({ qtdTarefa }) {
    const listaTarefas = qtdTarefa.map(item => 
        <li key={numero}>
            {item}
        </li>
    );
    return (
        <div className='container'>
            
        </div>
    )
}