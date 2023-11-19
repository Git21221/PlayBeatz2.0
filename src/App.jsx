import { Outlet } from 'react-router-dom'
import './App.css'
import {Header, Footer, Sidebar} from './components'
function App() {

  return (
    <>
    <div className="w-screen h-screen main-container grid grid-cols-layout grid-rows-layout">
      <Header />
      <Outlet />
      <Sidebar />
    </div>
    </>
  )
}

export default App
