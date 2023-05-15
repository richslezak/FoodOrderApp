// import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { MouseEventHandler } from 'react';

type HeaderProps = {
  onShowCart?: MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ onShowCart }: HeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>World Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </>
  );
};

export default Header;
