import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Okonomiyaki',
    description: 'Popular street food from Osaka, Japan.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pollo alla Cacciatora',
    description: 'A classic chicken stew dish that was born centuries ago in Tuscany Italy.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Oklahoma Onion Smash Burger',
    description: 'These burgers are juicy, and the caramelized onions make the entire thing pop.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Vepřo Knedlo Zelo',
    description: 'A Czech classic (Pork, Dumplings and Sauerkraut).',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
