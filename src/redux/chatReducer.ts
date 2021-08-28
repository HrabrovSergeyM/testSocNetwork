import { FormAction } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./reduxStore";
import { chatAPI, ChatMessageAPIType, StatusType } from "./../api/chatApi";
import { Dispatch } from "redux";
import { v1 } from "uuid";

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
  id: string;
};

let initialState = {
  messages: [] as ChatMessageType[],
  status: "pending" as StatusType,
};

const chatReducer = (
  state = initialState,
  actions: ActionsType
): InitialStateType => {
  switch (actions.type) {
    case `SN/CHAT/MESSAGES_RECEIVED`:
      return {
        ...state,
        messages: [
          ...state.messages,
          ...actions.payload.messages.map((m) => ({ ...m, id: v1() })),
        ].filter((m, index, array) => index >= array.length - 100),
      };
    case `SN/CHAT/STATUS_CHANGED`:
      return {
        ...state,
        status: actions.payload.status,
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) => {
    return {
      type: "SN/CHAT/MESSAGES_RECEIVED",
      payload: { messages },
    } as const;
  },
  statusChanged: (status: StatusType) => {
    return {
      type: `SN/CHAT/STATUS_CHANGED`,
      payload: { status },
    } as const;
  },
};

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null =
  null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMessageHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start();
  chatAPI.subscribe("messagesReceived", newMessageHandlerCreator(dispatch));
  chatAPI.subscribe("statusChanged", statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe("messagesReceived", newMessageHandlerCreator(dispatch));
  chatAPI.stop();
};

export const sendMessage =
  (message: string): ThunkType =>
  async () => {
    chatAPI.sendMessage(message);
  };

export default chatReducer;
