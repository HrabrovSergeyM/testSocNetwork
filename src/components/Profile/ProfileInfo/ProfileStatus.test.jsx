import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="some status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("some status");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="some status" />);
    const root = component.root;
    let span = root.findAllByType("span");
    span.props.onDoubleClick();
    let input = root.findAllByType("input");

    expect(input.props.value.children[0]).toBe("some status");
  });
});
