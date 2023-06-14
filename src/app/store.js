import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import crudReducer from './crudSlice'
// import crudReducer from './crudSlice';

export const store = configureStore({
  reducer: {
    // burada reducerları tanımlayıcaz
    counterReducer,
    crudReducer
    // crudReducer,
  },
});

// 1 - configure store parametre olarak bir obje
// 2 -   ve içerisine reducer objesi tanımla