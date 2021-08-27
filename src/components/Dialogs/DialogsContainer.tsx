import React from "react";
import classes from "./Dialogs.module.css";
import { actions } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.messagesPage,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { sendMessage: actions.sendMessage }),
  withAuthRedirect
)(Dialogs);
