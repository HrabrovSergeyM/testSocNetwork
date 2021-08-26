import React from "react";
import Users from "./Users";
import { connect, useSelector } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers,
  FilterType,
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
  getUsersFilter,
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
  filter: FilterType
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void

}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

type UsersPagePropsType = {
  pageTitle: string
}

// const UsersPage: React.FC<UsersPagePropsType> = (props) => {

//   const isFetching = useSelector(getIsFetching)

//   return (
//     <>
//       <h2>{props.pageTitle}</h2>
//       {props.isFetching ? <Preloader /> : null}
//       <Users
//         follow={this.props.follow}
//         unfollow={this.props.unfollow}
//         isFetching={this.props.isFetching}
//         followingInProgress={this.props.followingInProgress}
//       />
//     </>
//   );
// }

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize, filter} = this.props
    this.props.getUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize, filter} = this.props
    this.props.getUsers(pageNumber, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props;
    this.props.getUsers(1, pageSize, filter);
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
  };
};

export default compose(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers: requestUsers
  })
)(UsersContainer);
