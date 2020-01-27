import { createSelector } from 'reselect';
import uuid from 'uuid';
import { Types } from '../actions/list';

const initialState = {
  list: null,
  items: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [
          ...state.items,
          { ...action.product, total: getItemTotal(action.product), id: uuid(), checked: false }
        ]
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId),
      };
    case Types.TOGGLE_PRODUCT:
      //achar qual item para ser modificado
      return {
        ...state,
        items: toggleItem(state.items, action.productId),
      };
    default:
      return state;
  }
}

//Helpers
function getItemTotal(product) {
  return product.price * product.quantity;
}

function toggleItem(items, productId) {
  const index = items.findIndex(item => item.id === productId);
  return [
    ...items.slice(0, index), //todos os itens antes do item ser modificado
    { ...items[index], checked: !items[index].checked }, //item atualizado
    ...items.slice(index + 1) //todos os itens depois do item ser modificado
  ];
}

//Selectors
export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0)
);

export const getOpenedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => !item.checked).length
);

export const getClosedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => item.checked).length
);