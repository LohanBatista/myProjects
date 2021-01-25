//Saga

//Actions
export const ADD_PRODUCT = "addProduct/ADD_PRODUCT";
//Reducer
const initialState = {
  list: null,
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        list: action.list,
        items: [...state.items, action.product],
        // items: action.payload.product,
      };
    }
    default:
      return state;
  }
}

//Action Creators
export function addProduct({ product, list }) {
  return {
    type: ADD_PRODUCT,
    product,
    list,
  };
}
