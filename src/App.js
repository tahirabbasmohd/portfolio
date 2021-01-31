import React from "react";
import MyNavbar from './components/my-navbar/mynavbar.components';
import MyCarousal from './components/my-carousals/my-carousals.components';
import TitleMessgae from "./components/title-message/title-message.components";
import './App.css';



const App=()=> {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessgae />
    </div>
  );
}

export default App;
