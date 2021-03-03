const SEND_MESSAGE = "SEND-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

type DialogsDataType = {
  id: number
  name: string
}
type MessagesDataType = {
  id: number
  message: string
}

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Serg",
    },
    {
      id: 2,
      name: "Ars",
    },
    {
      id: 3,
      name: "Andrew",
    },
    {
      id: 4,
      name: "Leo",
    },
  ] as Array<DialogsDataType>,
  messagesData: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How r u?",
    },
    {
      id: 3,
      message: "Yo",
    },
  ] as Array<MessagesDataType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = action.newMessage;
      return {
        ...state,

        messagesData: [...state.messagesData, { id: 5, message: newMessage }],
      };
    }

    // case UPDATE_NEW_MESSAGE_TEXT: {
    //   return {
    //     ...state,
    //     newMessageText: action.newText,
    //   };
    // }

    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessage: string
}

export const sendMessageCreator = (newMessage: string): SendMessageCreatorActionType => {
  return { type: SEND_MESSAGE, newMessage };
};

// export const updateNewMessageTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
// };

export default dialogsReducer;
