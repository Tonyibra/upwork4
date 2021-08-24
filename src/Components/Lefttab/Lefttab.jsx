import "./Lefttab.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCountryData } from "../../redux/Slices/CardSlice";
export const Lefttab = ({ setCountrySearch }) => {
  const dispatch = useDispatch();
  const fetchDataHandler = () => {
    setCountrySearch(true);
    dispatch(getCountryData("UAE", "Dubai"));
  };
  return (
    <div className="leftTabContainer">
      <div className="countriesList">
        <div className="country" onClick={fetchDataHandler}>
          <div className="left">
            <div className="countryFlag">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
                alt="uae flag"
              />
            </div>
            <div className="countryName">
              <span>UAE</span>
            </div>
          </div>
          <div className="right">(30)</div>
        </div>
      </div>
    </div>
  );
};
