import React from "react";
import { View } from "react-native";
import { ListItem, Icon, CheckBox } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";

const list = [
  {
    title: "Spagetti"
  },
  {
    title: "Potato bravo"
  }
];

export default () => {
  console.log("hello");
  return (
    <View>
      <Spinner
        visible={true}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
      {list.map((item, i) => (
        <ListItem
          onPress={() => console.log("go to ingredients")}
          borderRadius={1}
          key={i}
          title={item.title}
          leftIcon={PlusIcon}
        />
      ))}
    </View>
  );
};

const PlusIcon = () => <CheckBox checked />;
