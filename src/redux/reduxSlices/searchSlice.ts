import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../helpers/types';

type searchSliceInitialStateType = {
  searchInput: string;
  searchResults: Character[];
};

const searchSliceInitialState: searchSliceInitialStateType = {
  searchInput: '',
  searchResults: [],
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: searchSliceInitialState,
  reducers: {
    changeSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    changeSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { changeSearchInput, changeSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
