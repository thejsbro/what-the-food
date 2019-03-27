import React from 'react';
import RecipesList from '../components/RecipesList';

export default class SettingsScreen extends React.Component {

  render() {
    return (
        <RecipesList navigation={this.props.navigation}/>
      );
  }
}
