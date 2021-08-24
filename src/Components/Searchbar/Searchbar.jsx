import React, { useState } from "react";
import { SelectBox } from "../SelectBox/SelectBox";
import { CheckBox } from "../CheckBox/CheckBox";
import "./Searchbar.scss";
export const Searchbar = () => {
  return (
    <div className="searchConatiner">
      <div className="content">
        <div className="selectList">
          <SelectBox title="Meeting With" />
          <SelectBox title="Age" />
          <SelectBox title="Height" />
          <SelectBox title="Weight" />
          <SelectBox title="Hair" />
          <SelectBox title="Tits" />
          <SelectBox title="Ethnicity" />
        </div>
        <div className="checkBoxList">
          <CheckBox title="With reviews" />
          <CheckBox title="With Video" />
          <CheckBox title="Verified" />
          <CheckBox title="Pornstars" />
          <CheckBox title="indep" />
          <CheckBox title="Skype Escorts" />
          <CheckBox title="Chat 1:1" />
          <CheckBox title="Has Natural Pic" />
        </div>
      </div>
    </div>
  );
};
