import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { foodTextChanged } from '../../actions/PostFormActions';
import {
  Input,
  Button,
  Card,
  CardSection
} from '../common';

class PostForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.onFoodChange = this.onFoodChange.bind(this);
  }
  
  onFoodChange(text) {
    this.props.foodTextChanged(text);
    console.log(text);
    console.log(this.props);
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
          <Button>
            Post
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postForm: state.postForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    foodTextChanged: bindActionCreators(foodTextChanged, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
