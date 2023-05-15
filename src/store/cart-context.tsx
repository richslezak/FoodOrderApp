import { createContext } from 'react';

type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
