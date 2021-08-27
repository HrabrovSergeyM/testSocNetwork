import { FormAction, stopSubmit } from "redux-form";
import { act } from "react-dom/test-utils";
import { profileAPI } from "../api/profileApi";
import { usersAPI } from "../api/usersApi";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { InferActionsTypes, BaseThunkType } from "./reduxStore";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are u?",
      likesCount: 15,
    },
    {
      id: 2,
      message: "It is my first post",
      likesCount: 12,
    },
  ] as Array<PostType>,

  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

export const actions = {
  addPostActionCreator: (newPostText: string) => {
    return { type: "SN/PROFILE/ADD_POST", newPostText } as const;
  },
  setUserProfile: (profile: ProfileType) => {
    return { type: "SN/PROFILE/SET_USER_PROFILE", profile } as const;
  },
  setStatus: (status: string) => {
    return { type: "SN/PROFILE/SET_STATUS", status } as const;
  },
  savePhotoSuccess: (photos: PhotosType) => {
    return { type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos } as const;
  },

  deletePost: (postId: number) => {
    return { type: "SN/PROFILE/DELETE_POST", postId } as const;
  },
};

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/PROFILE/ADD_POST": {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 3,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case "SN/PROFILE/SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SN/PROFILE/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    case "SN/PROFILE/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    default:
      return state;
  }
};

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };
export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
  };
export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      let data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
      }
    } catch (error) {
      debugger;
    }
  };
export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos));
    }
  };
export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
      if (userId !== null) {
        dispatch(getUserProfile(userId));
      } else {
        throw new Error(`User ID can't be null`);
      }
    } else {
      dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };

export default profileReducer;
