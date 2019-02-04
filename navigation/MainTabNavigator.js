import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import MenuScreen from '../screens/MyMenu';
import ShoppingScreen from '../screens/Shopping';
import RecipesScreen from '../screens/Recipes';

const MenuStack = createStackNavigator({
  Menu: MenuScreen,
});

const ShoppingStack = createStackNavigator({
  Shopping: ShoppingScreen,
});

const RecipesStack = createStackNavigator({
  Recipes: RecipesScreen,
});

export default createDrawerNavigator({
  ['мое меню']: MenuStack,
  ['мои продукты']: ShoppingStack,
  ['блюда']: RecipesStack,
});
