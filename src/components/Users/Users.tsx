import React from "react";
import classes from "./Users.module.css";
import defaultAvatar from "../../asssets/images/man-avatar-profile-round-icon_24640-14046.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersAPI } from "../../api/api";
import Paginator from "./Paginator";
import User from "./User";
import { UserType } from "../../types/types";

type PropsType = {
  totalUserCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: () => void
  unfollow: () => void
}

let Users: React.FC<PropsType> = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUserCount={props.totalUserCount}
        pageSize={props.pageSize}
      />
      <div>
        {props.users.map((user) => (
          <User
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
