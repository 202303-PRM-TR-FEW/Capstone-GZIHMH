import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import langSlice from './langSlicer';

const store = configureStore({
    reducer:  rootReducer,
    
});

export const persistor = persistStore(store);

export default store;