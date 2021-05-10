import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsConainer from "./Components/Dialogs/DialogsConainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";




function App(props) {

  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route render={()=><DialogsConainer/>} path="/dialogs"/>
            <Route render={()=><ProfileContainer/>} path="/profile/:userId?"/>
            <Route render={()=><UsersContainer/>} path="/users"/>
        </div>
    </div>

  );
}

export default App;
