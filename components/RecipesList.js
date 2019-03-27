import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import { AntDesign } from "@expo/vector-icons";
import { moveToBottom } from "../utils";
import { connect } from 'react-redux'
import { Avatar, Badge, withBadge } from 'react-native-elements'

// Buttons
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
    component: <AntDesign name="delete" size={60} color="red" />
  }
];

class RecipesList extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          {this.props.list.map((item, i) => (
            <Swipeout key={i} right={rightBtn} left={leftBtn} buttonWidth={60}>
              <View style={{ height: 60, borderColor: "#000", borderWidth: 2 }}>
                <Text>{item.title}</Text>
                <Badge value="99+" status="primary" />
              </View>
            </Swipeout>
          ))}
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
            onPress={() => this.props.navigation.navigate("AddRecipe")}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => ({ list: state.main.recipes });
const mapDispatchtoProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(RecipesList);
