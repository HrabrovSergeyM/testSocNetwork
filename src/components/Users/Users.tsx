import React from "react";
import classes from "./Users.module.css";
import Paginator from "./Paginator";
import User from "./User";
import { UsersSearchForm } from "./UsersSearchForm";
import { FilterType, requestUsers } from "../../redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUserCount, getUsers, getUsersFilter } from "../../redux/usersSelectors";
import { useEffect } from "react";

type PropsType = {
}

export const Users: React.FC<PropsType> = (props) => {

  const users = useSelector(getUsers) 
  const totalUserCount = useSelector(getTotalUserCount) 
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  },[])

  const follow = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

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
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};
