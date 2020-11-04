import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
  
      this.props.getUserStatus(userId)
    
  }
  
  componentDidMount() {
    this.refreshProfile();
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   if (this.props.match.params.userId !== prevProps.match.params.userId) {
    this.refreshProfile(); 
   }
  }

  render() {
   
    return <Profile {...this.props} 
    isOwner={!this.props.match.params.userId}
    profile={this.props.profile} 
    status={this.props.status}
     updateStatus={this.props.updateUserStatus}
     savePhoto={this.props.savePhoto}
     />;
    
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
  updateUserStatus: updateStatusThunkCreator,
  savePhoto: savePhotoThunkCreator,
  saveProfile: saveProfileThunkCreator
}),
  withRouter,
  
) (ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



// export default (WithUrlDataContainerComponent);
