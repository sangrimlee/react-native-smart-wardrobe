import React from 'react';
import { ItemList } from '../ItemScreen';
export const All = () => <ItemList category={'전체'} />;
export const Outer = () => <ItemList category={'아우터'} />;
export const Top = () => <ItemList category={'상의'} />;
export const Bottom = () => <ItemList category={'하의'} />;
export const OnePiece = () => <ItemList category={'원피스'} />;
