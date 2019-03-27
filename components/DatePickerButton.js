import React from "react";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { pickDate as pickDateAction } from "../actions/actions";
 
const DatePickerStartButton = ({ navigation, title }) => {
  console.log('dadsdad', title)
  return (
    <Button
      title={title}
      type="clear"
      onPress={() => navigation.navigate('Calendar')}
    />
  );
};

const mapStateToProps = state => ({ title: state.main.date.startDate.format('ddd DD.MM.YYYY') });
const mapDispatchtoProps = dispatch => ({
  pickDate: date => dispatch(pickDateAction(date))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(DatePickerStartButton);
