import React from 'react';
import Header from "./Header";
import {SetUserData, SetUserThunkCreator,} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {

        this.props.SetUserThunkCreator();


    }

    render() {
        return <Header {...this.props}/>
    }


}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:  state.auth.login
});
const HeaderContainerRR = connect(mapStateToProps,{SetUserThunkCreator})(HeaderContainer);
export default HeaderContainerRR;
