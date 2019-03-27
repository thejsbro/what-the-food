import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions/actions";
import { Button } from "react-native-elements";

const AddButton = ({ addRecipe }) => (
  <Button title="Сохранить" type="clear" onPress={addRecipe} />
);

const mapStateToProps = state => ({});

const mapDispatchtoProps = dispatch => ({
  addRecipe: () => dispatch(addRecipe())
});

export default connect(
  null,
  mapDispatchtoProps
)(AddButton);
