import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Dimensions, Image } from 'react-native';
import moment from 'moment';
import { timeFormatStrings, colors, mealType } from '../../Constants';

const { height, width } = Dimensions.get('window');

class Feed extends Component {
  renderRow(item) {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postItem}>
          <Image
            style={styles.postImage}
            source={item.get('image')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>
              {moment(item.get('date')).format(timeFormatStrings.normal)}
            </Text>
            <Text style={styles.typeText}>
              {mealType[item.get('type')]}
            </Text>
          </View>
        </View>
      </View>
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

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    alignItems: 'center',
    height: 400,
    width,
    marginBottom: width * 0.2
  },
  postItem: {
    height: height * 0.65,
    width: width * 0.9,
    backgroundColor: colors.allwhite,
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  postImage: {
    height: width * 0.9,
    width: (width * 0.9) - 2
  },
  textContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    padding: 20
  },
  dateText: {
    fontSize: 24
  },
  typeText: {
    marginTop: 10
  }
});

export default Feed;
