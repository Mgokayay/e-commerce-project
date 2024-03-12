const shoppingCartInitial = {
  cart: [],
  payment: {},
  adress: {},
};

const storedCart = localStorage.getItem("shoppingCart");
const initialCartState = storedCart
  ? JSON.parse(storedCart)
  : shoppingCartInitial;

export const shoppingCartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            ),
          })
        );
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: [
              ...state.cart,
              { product: action.payload, count: 1, checked: false },
            ],
          })
        );
        return {
          ...state,
          cart: [
            ...state.cart,
            { product: action.payload, count: 1, checked: false },
          ],
        };
      }
    case "DECREASE_TO_CART":
      const decreasedProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      console.log("çalıştı");
      if (decreasedProduct && decreasedProduct.count > 1) {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, count: item.count - 1 }
                : item
            ),
          })
        );
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count - 1 }
              : item
          ),
        };
      }
    //butonu 1 iken eksiye bastığımızda silmesi durumunu Sametle incele
    case "REMOVE_TO_CART":
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      );
      console.log("çalıştı");
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify({ ...state, cart: updatedCart })
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case "CHECK_TO_PRODUCT":
      const updatedCartWithCheck = state.cart.map((item) => {
        if (item.product.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      console.log("çalıştı", updatedCartWithCheck);

      localStorage.setItem(
        "shoppingCart",
        JSON.stringify({ ...state, cart: updatedCartWithCheck })
      );

      return {
        ...state,
        cart: updatedCartWithCheck,
      };

    default:
      return state;
  }
};
