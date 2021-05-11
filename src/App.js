import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsConainer from "./Components/Dialogs/DialogsConainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";




function App(props) {

  return (

    <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route render={()=><DialogsConainer/>} path="/dialogs"/>
            <Route render={()=><ProfileContainer/>} path="/profile/:userId?"/>
            <Route render={()=><UsersContainer/>} path="/users"/>
            <Route render={()=><Login/>} path="/login"/>


        </div>
    </div>

  );
}

export default App;
