import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer, Sidebar } from "./components";
import { Provider } from "react-redux";
import {store} from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div className="w-screen h-screen main-container grid grid-cols-layout grid-rows-layout bg-zinc-900">
        <Header />
        <Outlet />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
