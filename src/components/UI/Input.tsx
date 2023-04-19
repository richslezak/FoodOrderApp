import { InputHTMLAttributes } from 'react';
import { AllHTMLAttributes } from 'react';
import classes from './Input.module.css';

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'min' | 'max' | 'step' | 'defaultValue'
>;

type HtmlProps = Pick<AllHTMLAttributes<HTMLElement>, 'id' | 'label'>;

type AllProps = InputProps & HtmlProps;

const Input = ({ label, id, type, min, max, step, defaultValue }: AllProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} min={min} max={max} step={step} defaultValue={defaultValue} />
    </div>
  );
};

export default Input;
