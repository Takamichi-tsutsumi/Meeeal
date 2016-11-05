import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListView } from 'realm/react-native';
import db from '../../models';

class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    db.addListener('change', this.reloadData.bind(this));

    const meals = db.objects('Meal').sorted('date');
    this.state = {
      dataSource: ds.cloneWithRows(meals)
    };
  }

  reloadData() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const meals = db.objects('Meal').sorted('date');

    this.setState({
      dataSource: ds.cloneWithRows(meals)
    });
  }

  renderRow(meal) {
    return (
      <Text>
        {meal.food}
      </Text>
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default Home;
