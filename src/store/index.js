import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* Exemplo de testes da store 
console.log('********', store.getState())

store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: { name: 'Cafe' } });

console.log('********', store.getState())
*/

export default store;