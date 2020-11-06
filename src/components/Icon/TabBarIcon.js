import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import TabBarSvg from './TabBarSvg';

function TabBarIcon({ color, name, size, onPress }) {
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Svg fill={color} width={size} height={size} viewBox="0 0 100 100">
        {TabBarSvg[name]}
      </Svg>
    </TouchableOpacity>
  ) : (
    <Svg fill={color} width={size} height={size} viewBox="0 0 100 100">
      {TabBarSvg[name]}
    </Svg>
  );
}

export default TabBarIcon;
