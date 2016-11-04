import React, { Component } from 'react';
import { View } from 'react-native';
import PostForm from './PostForm';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <PostForm />
      </View>
    );
  }
}

export default Post;
