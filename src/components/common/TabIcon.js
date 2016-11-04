import React from 'react';
import { Text } from 'react-native';

export const TabIcon = (props) => {
  return (
    <Text style={{ color: props.selected ? 'red' : 'black' }}>
      {props.title}
    </Text>
  );
};
