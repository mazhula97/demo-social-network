import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/auth-reducer ";

class HeaderComponent extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  logout: logoutThunkCreator,
})(HeaderComponent);