import { createSlice } from "@reduxjs/toolkit";
import onlyReal from "../../api/api";

const initialState = {
  data: [],

  loadingErrorData: false,
};

export const cardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    getDataError: (state, action) => {
      state.loadingErrorData = action.payload;
    },
    getCountryDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    getCountryDataError: (state, action) => {
      state.loadingErrorData = action.payload;
    },
  },
});

export const {
  getDataSuccess,
  getDataError,
  getCountryDataSuccess,
  getCountryDataError,
} = cardSlice.actions;

export const getIndexData = () => async (dispatch) => {
  const [error, result] = await onlyReal.indexData();
  if (error) {
    dispatch(getDataError(error));
  } else {
    dispatch(getDataSuccess(result.data));
  }
};
export const getCountryData = (country, city) => async (dispatch) => {
  const [error, result] = await onlyReal.countryData(country, city);
  if (error) {
    dispatch(getCountryDataError(error));
  } else {
    dispatch(getCountryDataSuccess(result.data));
  }
};
export default cardSlice.reducer;
