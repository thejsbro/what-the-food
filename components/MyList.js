import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const list = [
  {
    title: 'Spagetti',
  },
  {
    title: 'Potato bravo',
  },
]

export default () => {
  console.log('hello')
return <View>
  {
    list.map((item, i) => (
      <ListItem
        chevron
        onPress={() => console.log('go to ingredients')}
        borderRadius={1}
        key={i}
        title={item.title}
        leftIcon={PlusIcon}
      />
    ))
  }
</View>}

const PlusIcon = () => <Icon
  raised
  name='add'
  type='add'
  color='#f50'
  onPress={() => console.log('add to menu')} />