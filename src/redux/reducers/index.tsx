import { combineReducers } from 'redux';
import { userReducer } from '../models/user';
import { themeReducer } from '../models/theme';
import { gamesReducer } from '../models/games/slice';
import { offCanvasReducer } from '../models/offCanvas/slice';

export const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  games: gamesReducer,
  offCanvas: offCanvasReducer
});
