import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://localhost:44304/api/profile/5`).then(response =>{
            this.props.setUserProfile(response.data);
        });
    }

    render() {

        return <div>
            <Profile {...this.props}/>

        </div>
    }


}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile
    }
}

//export default connect(mapStaeToProps,{setUserProfile}) (ProfileContainer);
const ProfileContainerRR = connect(mapStateToProps,{setUserProfile})(ProfileContainer);
export default ProfileContainerRR;