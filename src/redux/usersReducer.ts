import { AppStateType } from './reduxStore';
import { UserType } from './../types/types';

import { usersAPI } from "../api/api";
import { PhotosType } from "../types/types";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = " SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";



let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ids
};

type InitialState = typeof initialState

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
type SetTotalUserCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT
  totalUserCount: number
}
type SetToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type SetFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | SetCurrentPageActionType |
                   SetTotalUserCountActionType | SetToggleIsFetchingActionType | SetFollowingProgressActionType

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.totalUserCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};


export const followSuccess = (userId: number): FollowSuccessActionType => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUserCount = (totalUserCount: number): SetTotalUserCountActionType => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUserCount,
  };
};

export const setToggleIsFetching = (isFetching: boolean): SetToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setFollowingProgress = (isFetching: boolean, userId: number): SetFollowingProgressActionType => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

//thunk

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType =ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setToggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
  };
};

export const follow = (userId: number ): ThunkType => {
  return async (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode == 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(setFollowingProgress(false, userId));
  };
};

export const unfollow = (userId: number ): ThunkType => {
  return async (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(setFollowingProgress(false, userId));
  };
};

export default usersReducer;
