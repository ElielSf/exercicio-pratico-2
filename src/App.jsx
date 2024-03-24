import './css/App.css'
import Header from './components/Header.jsx'
import Tarefas from './components/Tarefas.jsx'

export default function App() {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Tarefas />
      </main>
    </div>
  )
}