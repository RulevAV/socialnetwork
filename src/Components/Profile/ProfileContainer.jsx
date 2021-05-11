import React from 'react';
import Profile from "./Profile";
import {GetUserThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../hoc/AuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.GetUserThunkCreator(this.props.match.params.userId);
    }

    render() {

        return <div>
            <Profile {...this.props}/>

        </div>
    }


}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);




let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
    }
}

let whithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

const ProfileContainerRR = connect(mapStateToProps,{GetUserThunkCreator})(whithUrlDataContainerComponent);
export default ProfileContainerRR;