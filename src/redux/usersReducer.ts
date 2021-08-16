import { InferActionsTypes, BaseThunkType } from './reduxStore';
import { UserType } from './../types/types';

import { usersAPI } from "../api/usersApi";
import { updateObjectInArray } from '../utils/object.helpers';




let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ids
};

type InitialState = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      };
    case 'SN/USERS/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      };

    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users,
      };

    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SN/USERS/SET_TOTAL_USER_COUNT':
      return {
        ...state,
        totalUserCount: action.totalUserCount,
      };
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
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

export const actions = {
  followSuccess: (userId: number) => {
    return {
      type: 'SN/USERS/FOLLOW',
      userId,
    } as const;
  },
  
  unfollowSuccess: (userId: number) =>  {
    return {
      type: 'SN/USERS/UNFOLLOW',
      userId,
    } as const;
  },
  
  setUsers: (users: Array<UserType>) => {
    return {
      type: 'SN/USERS/SET_USERS',
      users,
    } as const;
  },
  
  setCurrentPage: (currentPage: number) => {
    return {
      type: 'SN/USERS/SET_CURRENT_PAGE',
      currentPage,
    } as const;
  },
  
  setTotalUserCount: (totalUserCount: number)=> {
    return {
      type: 'SN/USERS/SET_TOTAL_USER_COUNT',
      totalUserCount,
    } as const;
  },
  
  setToggleIsFetching: (isFetching: boolean) => {
    return {
      type: 'SN/USERS/TOGGLE_IS_FETCHING',
      isFetching,
    } as const;
  },
  
  setFollowingProgress: (isFetching: boolean, userId: number) => {
    return {
      type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const;
  }
}

//thunk

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setToggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.setToggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUserCount(data.totalCount));
    dispatch(actions.setCurrentPage(currentPage));
  };
};

export const follow = (userId: number ): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setFollowingProgress(true, userId));
    let data = await usersAPI.follow(userId);
    if (data.resultCode == 0) {
      dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.setFollowingProgress(false, userId));
  };
};

export const unfollow = (userId: number ): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setFollowingProgress(true, userId));
    let data = await usersAPI.unfollow(userId);
    if (data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.setFollowingProgress(false, userId));
  };
};

export default usersReducer;
