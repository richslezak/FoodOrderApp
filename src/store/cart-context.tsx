import { createContext } from 'react';

type CartContext = {
  items: string[];
  totalAmount: number;
};

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: any) => {},
});

export default CartContext;
