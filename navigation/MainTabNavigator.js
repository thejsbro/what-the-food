import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

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
  Recipes: {
    screen: RecipesScreen,
    navigationOptions: ({navigation}) => ({
      title: "Блюда",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
    }),
    headerStyle: { paddingRight: 10, paddingLeft: 15 },
  },
});

export default createBottomTabNavigator({
  ['мое меню']: MenuStack,
  ['мои продукты']: ShoppingStack,
  ['блюда']: RecipesStack,
});
