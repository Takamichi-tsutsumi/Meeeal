import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Feed from './Feed';
import { dataLoaded } from '../../actions/PostListActions';
import { colors } from '../../Constants';

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.postList.items.toArray())
    };

    this.renderFeed = this.renderFeed.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const items = newProps.postList.items.toArray();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
  }

  renderFeed() {
    const size = this.props.postList.items.size;
    return (
      size === 0 ?
        <Text> There are No post </Text> :
        <Feed
          dataSource={this.state.dataSource}
          enableEmptySections={true}
        />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderFeed() }
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.home_background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
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
