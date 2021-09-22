import { IS_LOADING, UPDATE_ERROR, ADD_PRODUCT, DELETE_PRODUCT } from '../type';
import createStore from '../../Hooks/createStore';

const initialState = {
  isLoading: false,
  error: '',
  products: [],
  count: 1,
};

function CartReducer(state, action) {
  switch (action.type) {
    case IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    case ADD_PRODUCT: {
      const { product } = action.payload;

      const products = [...state.products, product];

      return {
        ...state,
        products,
        count: products.length,
      };
    }

    case DELETE_PRODUCT: {
      const { id } = action.payload;

      const products = state.products.filter((p) => {
        return p.id !== id;
      });

      return {
        ...state,
        products,
        count: products.length,
      };
    }

    case UPDATE_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
}

const [CartProvider, useCart, useDispatch] = createStore(CartReducer, initialState);

export { CartProvider, useCart, useDispatch };
