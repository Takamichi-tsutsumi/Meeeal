import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import moment from 'moment';

class Feed extends Component {
  renderRow(item) {
    return (
      <Text>
        {item.get('restaurant')} {item.get('food')} {moment(item.get('date')).format('YY/MM/DD')}
      </Text>
    );
  }

  render() {
    return (
      <ListView
        {...this.props}
        renderRow={this.renderRow}
      />
    );
  }
}

export default Feed;
