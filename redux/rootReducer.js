import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    courses: persistReducer(persistConfig, reducer),
});

export default rootReducer;