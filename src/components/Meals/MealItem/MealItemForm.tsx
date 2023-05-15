import { FormEvent, useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

type MealItemFormProps = {
  onAddToCart: (arg0: number) => void;
  id: string;
};

const MealItemFrom = ({ onAddToCart, id }: MealItemFormProps) => {
  const amountInputRef = useRef<HTMLInputElement>(null!);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredAmount = amountInputRef?.current?.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Ammount"
        id={`amount_ ${id}`}
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
