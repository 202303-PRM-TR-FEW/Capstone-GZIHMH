import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or any other storage mechanism you prefer
import reducer from './reducer';

const persistConfig = {
    key: 'root', // the key under which your state will be saved
    storage,
};

const rootReducer = combineReducers({
    courses: persistReducer(persistConfig, reducer),
});

export default rootReducer;