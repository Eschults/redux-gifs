import { combineReducers } from 'redux';
import GifsReducer from './gifs_reducer';
import SelectedGifReducer from './selected_gif_reducer';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  selectedGif: SelectedGifReducer
});

export default rootReducer;
