import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { dataLoaded } from '../../actions/PostListActions';
import { colors } from '../../Constants';

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.postList.items.toArray())
    };

    console.log(this.props.postList.items);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    const items = newProps.postList.items.toArray();
    console.log(items);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
  }

  renderRow(item) {
    return (
      <Text>
        {item.get('restaurant')} {item.get('food')} {moment(item.get('date')).format('YY/MM/DD')}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home currently posted: {this.props.postList.items.size}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.home_background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    postList: state.postList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataLoaded: bindActionCreators(dataLoaded, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
