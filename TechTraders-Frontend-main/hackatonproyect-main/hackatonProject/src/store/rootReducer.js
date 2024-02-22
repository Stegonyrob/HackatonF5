import { combineReducers } from 'redux';
import slidesReducer from './slidesReducer'; // Asegúrate de importar el reducer correcto

const rootReducer = combineReducers({
  slides: slidesReducer,
  // Puedes agregar más reducers aquí si es necesario
});

export default rootReducer;
