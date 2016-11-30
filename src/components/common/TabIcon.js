import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../Constants';

export const TabIcon = (props) => {
  return (
    <Text style={{ color: (props.selected ? colors.tabBarActive : colors.allwhite), fontSize: 16}}>
      {props.menuText}
    </Text>
  );
};
