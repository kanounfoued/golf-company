import { IS_LOADING, SELECT_PRODUCT, GET_ALL_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT, UPDATE_ERROR } from '../type';
import createStore from '../../Hooks/createStore';

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: '',
};

function ProductReducer(state, action) {
  switch (action.type) {
    case IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    case SELECT_PRODUCT: {
      const { product } = action.payload;
      return {
        ...state,
        product,
      };
    }

    case GET_ALL_PRODUCTS: {
      const { products } = action.payload;
      return {
        ...state,
        products,
      };
    }

    case UPDATE_PRODUCT: {
      const { product } = action.payload;

      const products = state.products.map((p) => {
        return p.id === product.id ? product : p;
      });

      return {
        ...state,
        products,
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

const [ProductProvider, useProduct, useDispatch] = createStore(ProductReducer, initialState);

export { ProductProvider, useProduct, useDispatch };
