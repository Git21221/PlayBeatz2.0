import "./App.css";
import { Header, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";



function App() {
  // window.addEventListener('change', () => {
  //   console.log(window);
  // })
  return (
    <Provider store={store}>
      <div
        className={`w-screen h-screen main-container grid grid-cols-layout grid-rows-layout bg-zinc-900`}
      >
        <Header />
        <Outlet />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
