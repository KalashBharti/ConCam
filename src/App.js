import './App.css';

import BackDrop from './Components/BackDrop';
import ContactUs from './Components/ContactUs';
import Contribute from './Components/Contribute';
import Feedback from './Components/Feedback';
import HomePage from './Components/HomePage';
import {SocketProvider} from './contexts/SocketProvider';
import Lobby from './Components/Screens/Lobby';
import Room from './Components/Screens/Room';
import Login from './Components/Login';
import Navbar from "./Components/Navbar";
import Pops from './Components/Pops';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [login , ActiveLogin] = useState(false);
  const [popsMessage , setPopsMessage] = useState("");
  const [popActive,setPopActive]=useState(false);
  const BackdropOff = () => {
    setSidebar(false);
    ActiveLogin(false);
  }
  const toggleSideBar =()=>{
    setSidebar((prev)=>!prev);
  }

  const toggleLogin = () => {
    ActiveLogin((prev)=>!prev);
  }
  const popMessage =(mess)=>{
    setPopsMessage(mess);
    setPopActive(true);

    setTimeout(() => {
      setPopActive(false);
    }, 3000);
  }
  return (
    <div>
      <Router>
      <Navbar toggleSideBar={toggleSideBar} sidebar={sidebar} 
      toggleLogin={toggleLogin} />
      <Pops message={popsMessage} active={popActive}/>
      <Login start={login} toggleLogin={toggleLogin} pops={popMessage}/>
      <BackDrop start={sidebar || login} BackdropOff={BackdropOff} />
      <Sidebar sidebarState={sidebar} />
        <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route exact path="/" element={
        
        <Lobby/>
     
      } />
          <Route path='/Contribute' element={<Contribute />} />
          <Route path='/room/:roomId' element={<Room />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/feedback' element={<Feedback />} />
         
        </Routes>

        {/* <Contribute/>/ */}

        {/* <Feedback/> */}


      </Router>
    </div>
  );
}

export default App;
