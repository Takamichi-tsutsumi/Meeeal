import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native';

class ToggleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      value: Number(!this.state.value)
    });
    this.props.onPress();
  }

  render() {
    const textStyle = (num) => {
      return num === this.state.value ?
        this.props.selectedTextStyle :
        this.props.otherTextStyle;
    };

    return (
      <TouchableHighlight
        onPress={this.onToggle}
        underlayColor='transparent'
      >
        <Animated.View style={styles.container}>
          <Text
            style={textStyle(0)}
          >
            {this.props.textList[0]}
          </Text>
          <Text> {this.props.separateText} </Text>
          <Text
            style={textStyle(1)}
          >
            {this.props.textList[1]}
          </Text>
        </Animated.View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});

ToggleText.defaultProps = {
  separateText: '/',
  selectedTextStyle: {
    color: '#007aff'
  },
  otherTextStyle: {
    color: 'gray'
  },
  initialValue: 0
};

ToggleText.propTypes = {
  separateText: PropTypes.string,
  selectedTextStyle: PropTypes.object,
  otherTextStyle: PropTypes.object,
  textList: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  initialValue: PropTypes.oneOf([0, 1])
};

export { ToggleText };
