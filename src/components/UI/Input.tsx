import { InputHTMLAttributes, ReactNode } from 'react';
import classes from './Input.module.css';

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'min' | 'max' | 'step' | 'defaultValue'
> & {
  id?: string;
  label?: ReactNode;
};

const Input = ({ label, id, type, min, max, step, defaultValue }: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} min={min} max={max} step={step} defaultValue={defaultValue} />
    </div>
  );
};

export default Input;
