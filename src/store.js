// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
// se importa el slice de accesorios
import avReducer from './avSlice';
export default configureStore({
  reducer: {
    venue: venueReducer,
    //se agrega el slice de accesorio a la tienda
    av: avSlice,
  },
});
