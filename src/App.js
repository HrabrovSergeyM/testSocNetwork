import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import { Suspense } from "react";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Switch>
          <div className="app-wrapper-content">
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />

            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route
              exact
              path="/dialogs"
              render={() => {
                return (
                  <Suspense
                    fallback={
                      <div>
                        <Preloader />
                      </div>
                    }
                  >
                    <DialogsContainer />
                  </Suspense>
                );
              }}
            />
            <Route
              path="/users"
              render={() => {
                return (
                  <Suspense
                    fallback={
                      <div>
                        <Preloader />
                      </div>
                    }
                  >
                    <UsersContainer />
                  </Suspense>
                );
              }}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </Switch>
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

const MainApp = (props) => {
  return (
    <HashRouter hashType={"slash"}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
