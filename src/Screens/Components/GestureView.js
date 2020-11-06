import React from 'react';
import { Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  and,
  block,
  cond,
  call,
  eq,
  Extrapolate,
  interpolate,
  not,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  timing,
  useValues,
  onGestureEvent,
  snapPoint,
} from 'react-native-redash/lib/module/v1';
import { useMemoOne } from 'use-memo-one';

const { width, height } = Dimensions.get('window');
const SNAP_BACK = height / 2;

const GestureView = ({ children, onGesture }) => {
  const [
    translationX,
    translationY,
    velocityY,
    state,
    translateX,
    translateY,
    shouldSnapBack,
  ] = useValues(0, 0, 0, State.UNDETERMINED, 0, 0, 0);
  const snapTo = snapPoint(translationY, velocityY, [0, SNAP_BACK]);

  const gestureHandler = useMemoOne(
    () =>
      onGestureEvent({
        translationX,
        translationY,
        velocityY,
        state,
      }),
    [translationX, translationY, velocityY, state],
  );
  useCode(
    () =>
      block([
        cond(
          and(
            not(shouldSnapBack),
            eq(snapTo, SNAP_BACK),
            eq(state, State.END),
            set(shouldSnapBack, 1),
          ),
        ),
        cond(
          shouldSnapBack,
          call([], () => onGesture()),
          cond(
            eq(state, State.END),
            [
              set(translateX, timing({ from: translateX, to: 0 })),
              set(translateY, timing({ from: translateX, to: 0 })),
            ],
            [set(translateX, translationX), set(translateY, translationY)],
          ),
        ),
      ]),
    [
      onGesture,
      shouldSnapBack,
      snapTo,
      state,
      translateX,
      translateY,
      translationX,
      translationY,
    ],
  );
  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateY }],
        }}
      >
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default GestureView;
