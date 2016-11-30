import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Post extends Component {
  componentWillMount() {
    Actions.Post();
  }

  render() {
    return (
      <View />
    );
  }
}
