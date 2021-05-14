import React from 'react';
import Profile from "./Profile";
import {
    GetStatusThunkCreator,
    GetUserThunkCreator, UpdateStatusThunkCreator,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId===undefined?'':this.props.match.params.userId;

        //проблема с асинхронностью
        //Компонента (ProfileStatus) уже инициализирована и локальный state не обновляется.
        this.props.GetUserThunkCreator(userId);
        setTimeout(()=>{
            this.props.GetStatusThunkCreator(userId);
        },2000)


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
        status:state.profilePage.status,
    }
}

let whithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

const ProfileContainerRR = connect(mapStateToProps,{GetUserThunkCreator})(whithUrlDataContainerComponent);

let Pcompose = compose(
    connect(mapStateToProps,{GetUserThunkCreator,GetStatusThunkCreator,UpdateStatusThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);

export default Pcompose;