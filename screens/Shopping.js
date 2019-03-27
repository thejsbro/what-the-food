import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Checklist from '../components/ShoppingChecklist';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Продукты',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Checklist />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
