import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
// import { AntDesign } from "@expo/vector-icons";
import { moveToBottom } from "../utils";
import { connect } from 'react-redux'
import { Badge } from 'react-native-elements'
import { getRecipes as getRecipesAction, addRecipeToRation as addRecipeToRationAction } from "../actions/actions";
import Swipeable from 'react-native-swipeable';
import {memoize} from 'lodash'

/* // Buttons
const rightBtn = [
  {
    component: <AntDesign name="minussquare" size={60} color="green" />
  },
  {
    component: (
      <TextInput
        keyboardType="numeric"
        value="13"
        style={{
          height: 60,
          borderColor: "gray",
          borderWidth: 1,
          fontSize: 30,
          textAlign: "center"
        }}
      />
    )
  },
  {
    component: <AntDesign name="plussquare" size={60} color="red" />
  }
];
const leftBtn = [
  {
    component: <AntDesign onPress={() => console.log('deletes')} name="delete" size={60} color="red" />
  },
  // {
  //   component: <Icon onPress={() => console.log('deletes')} type='ant-design' name="delete" size={60} color="red" />
  // },
]; */

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
});

const leftContent =
  <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
    <Text>ADD ME >>></Text>
  </View>;

class RecipesList extends React.Component {

  componentDidMount() {
    console.log('componentDidUnmount ! ! !')
    this.props.getRecipes();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ! ! !')
  }

  onAddToMenu = (id) => memoize(() => {
    console.log(id)
    this.props.addRecipeToRation(id)
    console.log('onLeft2')
  });

  render() {
    console.log('recipes in comp: ', this.props.list)
    return (
      <View>
        <ScrollView style={styles.container}>
          {this.props.list.map((item, i) =>
            <Swipeable
              onLeftActionComplete={this.onAddToMenu(item.id)}
              key={i}
              leftActionActivationDistance={100}
              rightContent={leftContent}
              leftContent={leftContent} >
              <View style={[styles.listItem, {backgroundColor: 'salmon'}]}>
                <Text>{item.name}</Text>
                <Badge value="99+" status="primary" />
              </View>
            </Swipeable>
          )}
        </ScrollView>
        {moveToBottom(
          <Button
            style={{
              width: "100%",
              height: 50,
              position: "absolute",
              bottom: 0,
              right: 0,
              paddingBottom: 0
            }}
            icon={
              <Icon
                name="plus-circle"
                type="font-awesome"
                color="white"
                size={35}
              />
            }
            title=" Add new"
            onPress={() => console.log('to do AddNew')/* this.props.navigation.navigate("AddRecipe") */}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({ list: state.main.recipes });
const mapDispatchtoProps = dispatch => ({
  getRecipes: () => dispatch(getRecipesAction()),
  addRecipeToRation: (id) => dispatch(addRecipeToRationAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(RecipesList);
