import * as ProductActions from '../actions/productActions';

const initialState = {
  productList: []
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.PRODUCT_ADD: {
      const { product } = action.payload;
      return {
        ...state,
        productList: [...state.productList, product],
      }
    }
    case ProductActions.PRODUCT_EDIT: {
      const { productList } = state;
      const { product } = action.payload;
      const editProductList = productList.filter(x => x.id !== action.payload.product.id);
      return {
        productList: [...editProductList, product]
      }
    }
    case ProductActions.PRODUCT_DELETE: {
      const { productList } = state;
      const newProduct = productList.filter(x => x.id !== action.payload.id)
      return {
        productList: newProduct
      }
    }
    default:
      return state;
  }
}

export default ProductReducer