import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsConainer from "./Components/Dialogs/DialogsConainer";
import UsersContainer from "./Components/Users/UsersContainer";




function App(props) {

  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route render={()=><DialogsConainer/>} path="/dialogs"/>
            <Route render={()=><Profile/>} path="/profile"/>
            <Route render={()=><UsersContainer/>} path="/users"/>
        </div>
    </div>

  );
}

export default App;
