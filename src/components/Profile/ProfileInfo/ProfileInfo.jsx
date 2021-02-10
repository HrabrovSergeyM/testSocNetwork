import React from "react";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAvatar from "../../../asssets/images/man-avatar-profile-round-icon_24640-14046.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
      </div> */}
      <div className={classes.descriptionBlog}>
        {" "}
        <img
          className={classes.avatar}
          src={props.profile.photos.large || defaultAvatar}
        />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>Full name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>Contacts: {props.profile.contacts.vk}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
