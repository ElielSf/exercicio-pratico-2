import './css/App.css'
import Header from './components/Header.jsx'
import NovaTarefa from './components/NovaTarefa.jsx'
import AdicionarTarefa from './components/AdicionarTarefa.jsx'
import TarefasConcluidas from './components/TarefasConcluidas.jsx'

export default function App() {

  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <AdicionarTarefa />
      </main>
    </div>
  )
}
