import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable';
import { Badge } from 'react-native-elements'

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
});

const leftContent =
  <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
    <Text>trash</Text><AntDesign name="delete" size={60} color="red" />
  </View>;

export default ({ration}) => {
return <View>
  <ScrollView style={styles.container}>
    {ration.map((item, i) => {
      return(
      <Swipeable
        onLeftActionComplete={() => null}
        key={i}
        leftActionActivationDistance={100}
        rightContent={leftContent}
        leftContent={leftContent} >
        <View style={[styles.listItem, {backgroundColor: 'green'}]}>
          <Text>{item.dish.name}</Text>
          <Badge value={item.portions} status="primary" />
        </View>
      </Swipeable>
    )})}
  </ScrollView>
</View>}

const PlusIcon = () => <Icon
  raised
  name='add'
  type='add'
  color='#f50'
  onPress={() => console.log('add to menu')} />