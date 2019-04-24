import React from 'react';
import MyMenu from '../components/RationList';
import { connect } from "react-redux";
import { getRation as getRationAction } from "../actions/actions";

export class SettingsScreen extends React.Component {

  componentDidMount() {
    this.props.getRation();
  }

  render() {
    console.log('My Menu: ', this.props.ration )
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <MyMenu ration={this.props.ration}/>;
  }
}

const mapStateToProps = state => ({ ration: state.main.ration });
const mapDispatchtoProps = dispatch => ({
  getRation: () => dispatch(getRationAction())
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(SettingsScreen);
