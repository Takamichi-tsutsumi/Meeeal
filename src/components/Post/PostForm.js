import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import db from '../../models';
import { foodTextChanged, postCreated } from '../../actions/PostFormActions';
import {
  Input,
  Button,
  Card,
  CardSection
} from '../common';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.onFoodChange = this.onFoodChange.bind(this);
    this.onButtonDown = this.onButtonDown.bind(this);
  }
  
  onFoodChange(text) {
    this.props.foodTextChanged(text);
  }

  onButtonDown() {
    this.createPost(this.props.postFormData);
    this.props.postCreated();
  }

  createPost(formData) {
    console.log('Saving object', formData);
    const data = Object.assign(formData);

    db.write(() => {
      const m = db.objects('Meal').sorted('id', true).slice(0, 1);
      let id;
      if (m.length === 0) {
        id = 1;
      } else {
        id = m[0].id + 1;
      }

      data.id = id;

      db.create('Meal', data);
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="料理名"
            placeholder="チャーハン"
            onChangeText={this.onFoodChange}
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
  return {
    foodTextChanged: bindActionCreators(foodTextChanged, dispatch),
    postCreated: bindActionCreators(postCreated, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
