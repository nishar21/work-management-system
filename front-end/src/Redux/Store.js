import {createStore} from 'redux';
import Reducer from './Reducer';

const store = createStore(Reducer);

export default store;


// function configureStore(state = { rotating: true }) {
//     return createStore(Reducer,state);
//   }
  
//   export default configureStore;