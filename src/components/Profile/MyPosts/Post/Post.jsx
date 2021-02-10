import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
      <div>
        <span>{props.message}</span>
      </div>
      <div>
        <span>{props.likesCount} Like</span>
      </div>
    </div>
  );
};

export default Post;
