import { InferActionsTypes } from "./reduxStore";

import { getAuthUserData } from "./authReducer";

let initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case "SN/APP/INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({
      type: "SN/APP/INITIALIZED_SUCCESS",
    } as const),
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
