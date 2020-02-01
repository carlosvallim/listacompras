import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const localStorageState = loadState()

const store = createStore(
  reducers,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* Exemplo de testes da store 
console.log('********', store.getState())

store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: { name: 'Cafe' } });

console.log('********', store.getState())
*/
store.subscribe(() => {
  saveState({ list: store.getState().list })
})

export default store;