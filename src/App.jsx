import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer, Sidebar } from "./components";
import SidebarContextProvider from "./context/sidebarContext/sidebarcontextProvider";

function App() {

  return (
    <SidebarContextProvider>
      <div className="w-screen h-screen main-container grid grid-cols-layout grid-rows-layout">
        <Header />
        <Outlet />
        <Sidebar />
      </div>
    </SidebarContextProvider>
  );
}

export default App;
