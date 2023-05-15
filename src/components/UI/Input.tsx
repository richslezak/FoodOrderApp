import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import classes from './Input.module.css';

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'min' | 'max' | 'step' | 'defaultValue'
> & {
  id?: string;
  label?: string;
};

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(
  ({ label, id, type, min, max, step, defaultValue }: InputProps, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);

export default Input;
