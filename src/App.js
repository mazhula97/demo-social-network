import React, { Component, Suspense } from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { HashRouter } from "react-router-dom";
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

//  catchAllUnhandledErrors = (promiseRejectionEvent) => {
//      alert("Some error occured")
//    console.error(promiseRejectionEvent)
 //}
  componentDidMount() {
    this.props.initializeApp();
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  // componentWillUnmount() {
  //   window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  // }
  render() {
    // if (!this.props.initialized) {
    //   return <Preloader className={s.} />;
    // }

    return (
      <div className={s.appWrapper}>
        <HeaderComponent />
        <Navbar />

        <div className={s.appWrapperContent}>
         <Suspense fallback={<Preloader />} >
           <Switch>
           <Route exact
            path="/"
            render={() =><Redirect from="/" to="/profile" />}
           />
            <Route
            path="/profile/:userId?"
            render={() =><ProfileContainer />}
            />
          <Route
            exact
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/music" render={() => <Music />} />
          <Route exact path="/settings" render={() => <Settings />} />
          <Route exact path="/friends" render={() => <Friends />} />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="*" render={() => <div>404 not found</div> } />

           </Switch>
        
         </Suspense>
                  </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
