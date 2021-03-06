import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsers,
} from "../../redux/usersReducer";
import classes from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUsersSelector,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
} from "../../redux/usersSelectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  totalUserCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  isFetching: boolean
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void

}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersContainer);
