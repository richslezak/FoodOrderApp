import { ReactNode, useReducer } from 'react';
import CartContext from './cart-context';

type CartProviderProps = {
  children: ReactNode;
};

type CartState = {
  items: { id: string; title: string; price: number; amount: number }[];
  totalAmount: number;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

type defaultCartAction =
  | { type: 'ADD_ITEM'; item: { id: string; title: string; price: number; amount: number } }
  | { type: 'REMOVE_ITEM'; id: string };

const cartReducer = (state: CartState, action: defaultCartAction) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount: number = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex: number = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems: { id: string; title: string; price: number; amount: number }[];

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

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems: any;

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

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: {
    id: string;
    title: string;
    price: number;
    amount: number;
  }) => {
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

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
