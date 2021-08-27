import React from "react";
//import "./App.css";
import "antd/dist/antd.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { LoginPage } from "./components/Login/LoginPage";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import store, { AppStateType } from "./redux/reduxStore";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { withSuspense } from "./hoc/withSuspense";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Header } from "./components/Header/Header";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const UsersPage = React.lazy(() => import("./components/Users/UsersContainer"));
const ChatPage = React.lazy(() => import("./pages/Chat/ChatPage"));

type MapsPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage);

class App extends Component<MapsPropsType & DispatchPropsType> {
  catchAllUnhandledError = (e: PromiseRejectionEvent) => {
    alert("some error");
    console.error(e);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledError
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    const { SubMenu } = Menu;
    const { Content, Footer, Sider } = Layout;

    return (
      // <div className="app-wrapper">
      //   <HeaderContainer />
      //   <Navbar />
      //   <Switch>
      //     <div className="app-wrapper-content">
      //       <Route exact path="/" render={() => <Redirect to={"/profile"} />} />

      //       <Route
      //         path="/profile/:userId?"
      //         render={() => <SuspendedProfile />}
      //       />
      //       <Route
      //         exact
      //         path="/dialogs"
      //         render={() => <SuspendedDialogs/>}
      //       />
      //       <Route
      //         path="/users"
      //         render={() => {
      //           return (
      //             <Suspense
      //               fallback={
      //                 <div>
      //                   <Preloader />
      //                 </div>
      //               }
      //             >
      //               <UsersPage
      //                 pageTitle={"Guys who want to learn React too"}
      //               />
      //             </Suspense>
      //           );
      //         }}
      //       />
      //       <Route path="/news" render={() => <News />} />
      //       <Route path="/music" render={() => <Music />} />
      //       <Route path="/settings" render={() => <Settings />} />
      //       <Route path="/login" render={() => <LoginPage />} />
      //     </div>
      //   </Switch>
      // </div>
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogs">Dialogs</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                  <Menu.Item key="3">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/chat">Chat</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="Others"
                >
                  <Menu.Item key="5">
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/music">Music</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/settings">Settings</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <div className="app-wrapper-content">
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to={"/profile"} />}
                  />
                  <Route
                    path="/profile/:userId?"
                    render={() => <SuspendedProfile />}
                  />
                  <Route
                    exact
                    path="/dialogs"
                    render={() => <SuspendedDialogs />}
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
                          <UsersPage
                            pageTitle={"Guys who want to learn React too"}
                          />
                        </Suspense>
                      );
                    }}
                  />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/chat" render={() => <SuspendedChatPage />} />
                  <Route path="/login" render={() => <LoginPage />} />
                </div>
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Social Network ©2021 Created by Sergey Hrabrov
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp: React.FC = () => {
  return (
    <HashRouter hashType={"slash"}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
