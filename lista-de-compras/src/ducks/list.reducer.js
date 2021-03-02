import { Types } from "./list";
import { v1 as uuidv1 } from "uuid";
import { createSelector } from "reselect";

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
          {
            ...action.product,
            total: getItemTotal(action.product),
            id: uuidv1(),
          },
        ],
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.filter((item) => item.id !== action.productId),
      };
    default:
      return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity;
}

export const getListTotal = createSelector(
  (state) => state.list.items,
  (items) => items.reduce((total, item) => total + item.total, 0)
);
