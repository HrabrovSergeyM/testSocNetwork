import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";
import { Field, Form, reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { InitialStateType } from "../../redux/dialogsReducer";

export type NewMessageFormType = {
  newMessageBody: string
}

type PropsType = {
  dialogsPage: InitialStateType
  sendMessage: (messageText: string) => void
  isAuth: 
}
type MapStateType = {
  
}
type MapDispatchType = {
  
}

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.messagesPage;

  let dialogsElements = props.messagesPage.dialogsData.map((element) => (
    <DialogItem name={element.name} key={element.id} id={element.id} />
  ));

  let messagesElement = props.messagesPage.messagesData.map((element) => (
    <Message key={element.id} message={element.message} />
  ));

  let newMessageElement = React.createRef();

  let addNewMessage = (values: {newMessageBody: string}) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElement}

        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};



export default Dialogs;
