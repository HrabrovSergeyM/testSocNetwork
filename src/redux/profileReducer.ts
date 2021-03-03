import { act } from "react-dom/test-utils";
import { profileAPI, usersAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const DELETE_POST = 'DELETE_POST'



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

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
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

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};


type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => {
  return { type: ADD_POST, newPostText };
};
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType  => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status: string): SetStatusActionType => {
  return { type: SET_STATUS, status };
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => {
  return { type: SAVE_PHOTO_SUCCESS, photos };
};

export const deletePost = (postId: number): DeletePostActionType => {
  return {type: DELETE_POST, postId}
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    debugger;
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export default profileReducer;
