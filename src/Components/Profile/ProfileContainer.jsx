import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import  {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        userId = userId===undefined?3:userId;
        axios.get(`https://localhost:44304/api/profile/${userId}`).then(response =>{
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

let whithUrlDataContainerComponent = withRouter(ProfileContainer)

const ProfileContainerRR = connect(mapStateToProps,{setUserProfile})(whithUrlDataContainerComponent);
export default ProfileContainerRR;