import React, { ChangeEvent } from "react";

import classes from "./ProfileInfo.module.css";

type PropsTypes = {
  status: string
  updateStatus: (newStatus: string) => void
}

type StateTypes = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsTypes, StateTypes> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    debugger;
    console.log("this:", this);
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: PropsTypes, prevState: StateTypes) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
