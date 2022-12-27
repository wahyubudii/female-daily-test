import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterSlice from '../reducer/counterSlice';
import dataSlice from '../reducer/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    data: dataSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;