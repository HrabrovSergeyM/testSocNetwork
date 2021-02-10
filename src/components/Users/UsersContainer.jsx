import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setFollowingProgress,
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
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

const mapStateToProps = (state) => {
  return {
    // users: getAllUsers(state),
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingProgress,
    getUsers,
  })
)(UsersContainer);
