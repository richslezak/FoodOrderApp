import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import classes from './Card.module.css';

type CardProps = {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
};

const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
