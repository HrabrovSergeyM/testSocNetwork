import React from "react";
import profileReducer, { actions } from "./profileReducer";

it("new post should be added", () => {
  // 1. test data
  let action = actions.addPostActionCreator("some text");
  let state = {
    posts: [
      {
        id: 1,
        message: "Hi, how are u?",
        likesCount: 15,
      },
      {
        id: 2,
        message: "It is my first post",
        likesCount: 12,
      },
    ],
    profile: null,
    status: "",
    newPostText: "",
  };

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
