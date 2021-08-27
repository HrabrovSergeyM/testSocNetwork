import { InferActionsTypes } from "./reduxStore";

type DialogsDataType = {
  id: number;
  name: string;
};
type MessagesDataType = {
  id: number;
  message: string;
};

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

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
  sendMessage: (newMessage: string) => {
    return { type: "SN/DIALOGS/SEND_MESSAGE", newMessage } as const;
  },
};

const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE": {
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

// export const updateNewMessageTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
// };

export default dialogsReducer;
