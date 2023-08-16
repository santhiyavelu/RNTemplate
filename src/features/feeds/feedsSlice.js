import {createSlice} from '@reduxjs/toolkit';
import dateUtils from '../../util/dateUtils';

const initialState = [];

const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    createNewPost: (state, action) => {
      const postObject = {
        postText: action.payload,
        likesCount: 0,
        comments: [],
        timeStamp: dateUtils.getUnixTimeStamp(),
      };

      state.push(postObject);
    },

    addLikeToPost: (state, action) => {
      const postTimestamp = action.payload;

      const postIndexToUpdate = state.findIndex(
        thisEl => thisEl.timeStamp === postTimestamp,
      );

      const postObjectToUpdate = state[postIndexToUpdate];

      postObjectToUpdate.likesCount += 1;
    },
  },
});

export const feedActions = feedsSlice.actions;

export default feedsSlice.reducer;
