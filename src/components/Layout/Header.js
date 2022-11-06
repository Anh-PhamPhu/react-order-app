//import libs
import React, {Fragment} from 'react';

//import other components
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

//import css module
import mealImage from '../../assets/meals.jpg';

const Header = props => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>NowOrder</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealImage} alt="A table full of delicious foods!" />
        </div>
    </Fragment>
  )
}


export default Header