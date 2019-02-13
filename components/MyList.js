import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { Ionicons, AntDesign } from '@expo/vector-icons';

const list = [
  {
    title: 'Spagetti',
  },
  {
    title: 'Potato bravo',
  },
]
       
// Buttons
const rightBtn = [
  {
    component: <AntDesign name="minussquare" size={60} color="green" />
  },
  {
    component: <TextInput keyboardType='numeric' value='13' style={{height: 60, borderColor: 'gray', borderWidth: 1, fontSize: 30, textAlign: 'center'}}/>
  },
  {
    component: <AntDesign name="plussquare" size={60} color="red" />
  }
]
const leftBtn = [
  {
    component: <AntDesign name="delete" size={60} color="red" />
  }
]

export default () => {
  console.log('hello')
return <View>
  {
    list.map((item, i) => (
      <Swipeout
        key={i}
        right={rightBtn}
        left={leftBtn}
        buttonWidth={60}
      >
        <View style={{ height: 60, borderColor: '#000', borderWidth: 2 }}>
          <Text>{item.title}</Text>
        </View>
      </Swipeout>
    ))
  }
</View>}

const PlusIcon = () => <Icon
  raised
  name='add'
  type='add'
  color='#f50'
  onPress={() => console.log('add to menu')} />