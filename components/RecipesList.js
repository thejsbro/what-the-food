import React, { Component } from 'react';
import { AppRegistry, Button, SectionList, StyleSheet, Text, View } from 'react-native';

export default class RecipesList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'М', data: ['Макароны по-флотски']},
            {title: 'Р', data: ['Рататуй', 'Ребра кабана', 'Ростбиф', 'Раки в томатном соусе', 'Рис с кусицей']},
          ]}
          renderItem={({item}) => <View >
            <Text style={styles.item}>{item}</Text>
            <Button
                onPress={() => null}
                title="+"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            /></View>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    display: 'flex',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
