import React from "react";
import preloader from "../../../asssets/images/preloader.svg";
import classes from "../preloader/Preloader.module.css";

let Preloader: React.FC = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
