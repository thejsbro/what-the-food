import React from 'react';
import AddRecipe from '../components/AddRecipe';
import { View } from 'react-native';

export default class SettingsScreen extends React.Component {

  render() {
    return (
      <View>
        <AddRecipe navigation={this.props.navigation}/>
      </View>
      );
  }
}
