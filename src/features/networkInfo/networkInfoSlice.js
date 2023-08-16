import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isNetworkConnected: false,
  isInternetReachable: false,
};

const networkInfoSlice = createSlice({
  name: 'networkInfo',
  initialState,
  reducers: {
    networkInfoChange: (state, action) => {
      state.isNetworkConnected = action.payload.isNetworkConnected;
      state.isInternetReachable = action.payload.isInternetReachable;
    },
  },
});

export const networkInfoActions = networkInfoSlice.actions;

export default networkInfoSlice.reducer;
