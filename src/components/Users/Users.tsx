import React from "react";
import classes from "./Users.module.css";
import Paginator from "./Paginator";
import User from "./User";
import { UserType } from "../../types/types";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { submit } from "redux-form";
import { UsersSearchForm } from "./UsersSearchForm";
import { FilterType, requestUsers } from "../../redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getPageSize, getTotalUserCount, getUsers, getUsersFilter } from "../../redux/usersSelectors";

type PropsType = {
  isFetching: boolean
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

let Users: React.FC<PropsType> = (props) => {

  const users = useSelector(getUsers) 
  const totalUserCount = useSelector(getTotalUserCount) 
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()



  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  }
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
    
  }

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged}/>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        
        totalUserCount={totalUserCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((user) => (
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
