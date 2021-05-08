import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route render={()=><Dialogs dialogsData={props.dialogsData} dialogsmessages={props.dialogsmessages}/>} path="/dialogs"/>
            <Route render={()=><Profile postData={props.postData} />} path="/profile"/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
