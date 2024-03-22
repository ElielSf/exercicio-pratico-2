import './css/App.css'
import Tarefa from './components/Tarefa.jsx'
import AdicionarTarefa from './components/AdicionarTarefa.jsx'
import TarefasConcluidas from './components/TarefasConcluidas.jsx'

export default function App() {

  return (
    <div className='container'>
      <div className='container__containerGrid'>
        <div className='container_containerGrid__title'>
          <h1>Lista de Atividades</h1>
        </div>
        <div className='container__containerGrid__tarefasConcluidas'>
          <TarefasConcluidas 
            numeroTarefas=''
          />
        </div>
        <div className='container__containerGrid__adicionarTarefas'>
          <AdicionarTarefa />
        </div>
        <div className='container__containerGrid__tarefasCriadas'>
          <Tarefa />
        </div>
      </div>
    </div>
  )
}
