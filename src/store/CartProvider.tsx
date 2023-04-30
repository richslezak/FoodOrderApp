import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useReducer } from 'react';
import CartContext from './cart-context';

type CartProviderProps = {
  children?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null;
};

type defaultCartState = {
  items: string[];
  totalAmount: number;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: typeof defaultCartState, action: any) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount: number = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex: number = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem: typeof Object = state.items[existingCartItemIndex];

    let updatedItems: any;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex: number = state.items.findIndex((item) => item.id === action.id);

    const existingItem: typeof Object = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems: Array<any>;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: string) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
