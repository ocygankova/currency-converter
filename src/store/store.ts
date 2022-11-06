import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './reducers/converterSlice';

const rootReducer = combineReducers({
  converter: converterReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
