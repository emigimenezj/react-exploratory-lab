
export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const updateLocalStorage = state => {
  localStorage.setItem('cart', JSON.stringify(state));
}

export const cartReducer = (state, {type, payload}) => {
  const HANDLERS = {
    'ADD_TO_CART': () => {
      const { id } = payload;
      const productInCartIndex = state.findIndex(item => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {...payload, quantity: 1}
      ];
    },
    'REMOVE_FROM_CART': () => state.filter(item => item.id !== payload.id),
    'CLEAR_CART': () => []
  }

  const newState = HANDLERS[type]();

  updateLocalStorage(newState);
  return newState;
}