import React, { Fragment } from 'react';

import AvailableMeals from './AvailableMeals';
import MealsSumary from './MealsSummary';

const Meals = props => {
  return (
    <Fragment>
        <MealsSumary />
        <AvailableMeals />
    </Fragment>
  )
}


export default Meals