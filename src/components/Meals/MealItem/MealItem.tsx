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

const MealItem = (props: MealItemProps) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
