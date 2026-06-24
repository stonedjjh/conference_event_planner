// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
// se importa el slice de accesorios y comidas
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    //se agrega el slice de accesorio y comidas a la tienda
    av: avReducer,// Se corrigió esta línea
    meals:mealsReducer
  },
});
