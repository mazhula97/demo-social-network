import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    // setTimeout(() => {
      this.props.getUserStatus(userId)
    // },1000)
    
  }

  render() {
   
    return <Profile {...this.props} 
    profile={this.props.profile} 
    status={this.props.status}
     updateStatus={this.props.updateUserStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
  // updateStatus: state.profilePage.updateStatus
});

export default compose (
  connect(mapStateToProps, {
  getUserProfile: getUserProfileThunkCreator,
  getUserStatus: getStatusThunkCreator,
  updateUserStatus: updateStatusThunkCreator
}),
  withRouter,
  
) (ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



// export default (WithUrlDataContainerComponent);
