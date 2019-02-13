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
    text: '>>'
  },
  {
    text: 'Пн'
  },
  {
    text: 'Вт'
  },
  {
    text: 'Ср'
  },
  {
    text: 'Чт'
  },
  {
    text: 'Пт'
  },
  {
    text: 'Сб'
  },
  {
    text: 'Вс'
  },
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
        autoClose
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