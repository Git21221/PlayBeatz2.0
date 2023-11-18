import './App.css'
import {Header, Footer, Sidebar} from './components'
function App() {

  return (
    <>
    <div className="w-screen h-screen main-container grid grid-cols-layout grid-rows-layout">
      <Header />
      
      <Sidebar />
    </div>
    </>
  )
}

export default App
