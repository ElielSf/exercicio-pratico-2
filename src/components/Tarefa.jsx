import '../css/Tarefa.css'

export default function Tarefa({ tarefa  }){
    return (
        <div className='containerTarefa'>
            <li className='containerTarefa__item'>Tarefa: {tarefa.nome} <br/>Data: {tarefa.data} <br/> <button className='containerTarefa__botao'>Finalizar</button></li>
        </div>
    )
}