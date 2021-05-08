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
            <Route render={()=><Dialogs messagesPage={props.state.messagesPage} />} path="/dialogs"/>
            <Route render={()=><Profile profile={props.state.profile} addPost={props.addPost} updaeNewPostText={props.updaeNewPostText}/>} path="/profile"/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
