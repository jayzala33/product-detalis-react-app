export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_EDIT = 'PRODUCT_EDIT';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';

export const productAdd = payload => {
  return {
    type: PRODUCT_ADD,
    payload
  }
}

export const productEdit = payload => {
  return {
    type: PRODUCT_EDIT,
    payload
  }
}

export const productDelete = payload => {
  return {
    type: PRODUCT_DELETE,
    payload
  }
}