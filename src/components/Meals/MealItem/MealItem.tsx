import { useContext } from 'react';
import MealItemFrom from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

type MealItemProps = {
  price: number;
  id: string;
  name: string;
  description: string;
};

const MealItem = ({ price, id, name, description }: MealItemProps) => {
  const cartCtx = useContext(CartContext);

  const itemPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      <div>
        <MealItemFrom id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
