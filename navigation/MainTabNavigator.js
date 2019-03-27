import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import MenuScreen from "../screens/MyMenu";
import ShoppingScreen from "../screens/Shopping";
import RecipesScreen from "../screens/Recipes";
import AddRecipe from "../screens/AddRecipe";
import DatePickerButton from "../components/DatePickerButton";
import DatePicker from "../screens/DatePicker";

import { FontAwesome } from "@expo/vector-icons";

const noHeader = { headerMode: "none" }

const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen
    }
  },
  noHeader
);

const ShoppingStack = createStackNavigator(
  {
    Shopping: {
      screen: ShoppingScreen
    }
  },
  noHeader
);

const AddRecipeStack = createStackNavigator({
  AddRecipe: {
    screen: AddRecipe,
    headerStyle: { paddingRight: 10, paddingLeft: 15 }
  }
});

const RecipesStack = createStackNavigator(
  {
    Recipes: {
      screen: RecipesScreen
    }
  },
  noHeader
);

export default createStackNavigator(
  {
    Tabs: {
      screen: createBottomTabNavigator({
        ["рацион"]: MenuStack,
        ["продукты"]: ShoppingStack,
        ["мои рецепты"]: RecipesStack,
        ["все рецепты"]: RecipesStack
      }),
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DatePickerButton navigation={navigation}/>,
        headerTitle: (
          <FontAwesome
            name="calendar"
            color="black"
            size={30}
            onPress={() => navigation.navigate('Calendar')}
          />
        ),
        headerRight: <DatePickerButton navigation={navigation}/>
      })
    },
    Calendar: {
      screen: DatePicker
    },
    AddRecipe: {
      screen: AddRecipeStack,
      navigationOptions: ({ navigation }) => ({
        title: "Новый рецепт",
        headerRight: <AddRecipeButton />
      }),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    }
  }
);
