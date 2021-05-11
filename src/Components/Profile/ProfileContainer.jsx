import React from 'react';
import Profile from "./Profile";
import {GetUserThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.GetUserThunkCreator(this.props.match.params.userId);
    }

    render() {
        if(this.props.isAuth===false)
            return <Redirect to={"/login"}/>
        return <div>
            <Profile {...this.props}/>

        </div>
    }


}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        isAuth : state.auth.isAuth,
    }
}

let whithUrlDataContainerComponent = withRouter(ProfileContainer)

const ProfileContainerRR = connect(mapStateToProps,{GetUserThunkCreator})(whithUrlDataContainerComponent);
export default ProfileContainerRR;