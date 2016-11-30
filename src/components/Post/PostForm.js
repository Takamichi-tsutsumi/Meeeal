import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as PostActions from '../../actions/PostFormActions';
import { addPost } from '../../actions/PostListActions';
import {
  Input,
  Button,
  Card,
  CardSection,
  DatePicker,
  ToggleText
} from '../common';


class PostForm extends Component {
  constructor(props) {
    super(props);

    this.onButtonDown = this.onButtonDown.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentWillMount() {
    this.props.resetForm();
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  onButtonDown() {
    this.createPost(this.props.postFormData.data);
    this.props.resetForm();
    Actions.popTo('root');
  }

  createPost(formData) {
    this.props.addPost(formData);
  }

  render() {
    const data = this.props.postFormData.data;
    const date = data.get('date');
    const { image } = this.props;
    return (
      <Card>
        <CardSection style={{ flex: 1 }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={image}
          />
        </CardSection>
        <CardSection>
          <ToggleText
            textList={['Eat Out', 'Home Made']}
            onPress={this.props.typeSwitched}
            value={data.get('type')}
          />
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
    postFormData: state.postFormData,
    postList: state.postList
  };
};

const mapDispatchToProps = (dispatch) => {
  const { foodTextChanged, resetForm,
    typeSwitched, restaurantTextChanged,
    dateChanged, genreTextChanged } = PostActions;

  return {
    foodTextChanged: bindActionCreators(foodTextChanged, dispatch),
    typeSwitched: bindActionCreators(typeSwitched, dispatch),
    restaurantTextChanged: bindActionCreators(restaurantTextChanged, dispatch),
    dateChanged: bindActionCreators(dateChanged, dispatch),
    genreTextChanged: bindActionCreators(genreTextChanged, dispatch),
    resetForm: bindActionCreators(resetForm, dispatch),
    addPost: bindActionCreators(addPost, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
