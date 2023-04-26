import { SyntheticEvent, useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemFrom = (props: any) => {
  const amountInputRef = useRef<any>(null);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Ammount"
        id={`amount_ ${props.id}`}
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemFrom;
