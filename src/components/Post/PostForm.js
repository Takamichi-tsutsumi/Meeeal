import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import * as PostActions from '../../actions/PostFormActions';
import {
  Input,
  Button,
  Card,
  CardSection,
  DatePicker
} from '../common';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.onButtonDown = this.onButtonDown.bind(this);
  }

  onButtonDown() {
    this.createPost(this.props.postFormData);
    this.props.postCreated();
    Actions.Home();
  }

  createPost(formData) {
    console.log('Saving object', formData);
  }

  render() {
    const data = this.props.postFormData.data;
    const date = data.get('date');
    return (
      <Card>
        <CardSection>
          <Text>{data.get('type') === 0 ? 'Eat Out' : 'Home Made'}</Text>
        </CardSection>
        <CardSection>
          <DatePicker
            date={date}
            onDateChange={this.props.dateChanged}
          />
        </CardSection>
        <CardSection>
          <Input
            label="レストラン"
            onChangeText={this.props.restaurantTextChanged}
            value={data.get('restaurant')}
          />
        </CardSection>
        <CardSection>
          <Input
            label="料理"
            onChangeText={this.props.foodTextChanged}
            value={data.get('food')}
          />
        </CardSection>
        <CardSection>
          <Input
            label="ジャンル"
            onChangeText={this.props.genreTextChanged}
            value={data.get('genre').name}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonDown}>
            Post
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postFormData: state.postFormData
  };
};

const mapDispatchToProps = (dispatch) => {
  const { foodTextChanged, postCreated,
    typeSwitched, restaurantTextChanged,
    dateChanged, genreTextChanged } = PostActions;

  return {
    foodTextChanged: bindActionCreators(foodTextChanged, dispatch),
    typeSwitched: bindActionCreators(typeSwitched, dispatch),
    restaurantTextChanged: bindActionCreators(restaurantTextChanged, dispatch),
    dateChanged: bindActionCreators(dateChanged, dispatch),
    genreTextChanged: bindActionCreators(genreTextChanged, dispatch),
    postCreated: bindActionCreators(postCreated, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
