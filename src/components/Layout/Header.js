import { Fragment } from 'react';
import HeaderCardButton from './HeaderCardButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foody</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
