import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { connect } from "react-redux";
import { pickDate as pickDateAction } from "../actions/actions";

import { Button } from "react-native-elements";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const {
      startDate: selectedStartDate,
      endDate: selectedEndDate
    } = props.date;
    this.state = {
      selectedStartDate,
      selectedEndDate
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.selectDates });
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Период",
      headerRight: (
        <Button title="Сохранить" type="clear" onPress={params.handleSave} />
      )
    };
  };

  selectDates = () => {
    const {
      selectedStartDate: startDate,
      selectedEndDate: endDate
    } = this.state;
    this.props.pickDate({ startDate, endDate });
    this.props.navigation.goBack()
  };

  onDateChange = (date, type) => {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null
      });
    }
  };

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    return (
      <View style={styles.container}>
        <CalendarPicker
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          startFromMonday={true}
          allowRangeSelection={true}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>𓂸 Панфил сосни тунца 𓂺</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100
  }
});

const mapStateToProps = state => ({ date: state.main.date });
const mapDispatchtoProps = dispatch => ({
  pickDate: date => dispatch(pickDateAction(date))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(DatePicker);
