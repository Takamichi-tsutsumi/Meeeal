import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  DatePickerIOS
} from 'react-native';
import moment from 'moment';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderPicker = this.renderPicker.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  renderPicker() {
    return (
      <View>
        <DatePickerIOS
          date={this.props.date}
          mode='date'
          transparent={true}
          onDateChange={this.props.onDateChange}
          style={this.props.datePickerStyle}
        />
      </View>
    );
  }

  render() {
    const { date } = this.props;
    return (
      <View style={this.props.buttonContainerStyle}>
        <TouchableOpacity onPress={this.openModal}>
          <Text style={this.props.buttonTextStyle}>
            {moment(date).format(this.props.dateFormatString)}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType={this.props.animationType}
          visible={this.state.isOpen}
          transparent={true}
        >
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              style={styles.modalMask}
              activeOpacity={1}
              underlayColor={'#00000077'}
              onPress={this.closeModal}
            >
              <TouchableHighlight
                underlayColor='#fff'
                style={styles.innerContainer}
              >
                <View>
                {this.renderPicker()}
                <TouchableHighlight
                  underlayColor='transparent'
                  onPress={this.closeModal}
                  style={styles.confirmButton}
                >
                  <Text style={styles.btnText}>{this.props.confirmText}</Text>
                </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  modalMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  confirmButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 16,
    color: '#007aff'
  }
});

DatePicker.defaultProps = {
  animationType: 'slide',

  buttonTextStyle: {
    fontSize: 14
  },
  buttonContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  datePickerStyle: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  dateFormatString: 'MMM Do[,] YYYY',
  confirmText: '決定'
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  animationType: PropTypes.oneOf(['slide', 'fade', 'none']),
  confirmText: PropTypes.string,
  dateFormatString: PropTypes.string
};

export { DatePicker };
