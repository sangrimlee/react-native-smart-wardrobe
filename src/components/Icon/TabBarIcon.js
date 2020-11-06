import React from 'react';
import Svg from 'react-native-svg';
import TabBarSvg from './TabBarSvg';

function TabBarIcon({ color, name, size }) {
  return (
    <Svg fill={color} width={size} height={size} viewBox="0 0 100 100">
      {TabBarSvg[name]}
    </Svg>
  );
}

export default TabBarIcon;
