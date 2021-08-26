import { AppStateType } from './reduxStore';
import { createSelector } from "reselect";

const getAllUsers = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getAllUsers, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUserCount = (state: AppStateType) => {
  return state.usersPage.totalUserCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
export const getUsersFilter = (state: AppStateType) => {
  return state.usersPage.filter
}
