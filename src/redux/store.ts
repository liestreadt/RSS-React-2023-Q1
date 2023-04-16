import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './reduxAPI';
import searchReducer from './reduxSlices/searchSlice';
import formsReducer from './reduxSlices/formsSlice';

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    search: searchReducer,
    forms: formsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
