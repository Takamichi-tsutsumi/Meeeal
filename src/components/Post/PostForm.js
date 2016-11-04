import React, { Component } from 'react';
import {
  Input,
  Button,
  Card,
  CardSection
} from '../common';

class PostForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="料理名"
            placeholder="チャーハン"
          />
        </CardSection>

        <CardSection>
          <Button>
            Post
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default PostForm;

