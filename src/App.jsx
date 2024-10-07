import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="app-container" >
      <Sidebar />
      <Main />
    </div>
  );
}
export default App;