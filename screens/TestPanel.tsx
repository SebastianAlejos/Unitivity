import React, { useCallback, useRef, useState } from 'react';
import {
  Platform, StatusBar, Animated,
  ScrollView, StyleSheet, useWindowDimensions,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  PanResponderGestureState
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SlidingUpPanel, { SlidingUpPanelAnimationConfig } from 'rn-sliding-up-panel';

const ios = Platform.OS === 'ios';

export default function TestPanel() {
  const deviceHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  const statusBarHeight: number = ios ? insets.bottom : StatusBar.currentHeight as number;
  const draggableRange = {
    top: deviceHeight / 1.5,
    bottom: deviceHeight / 8
  };

  const snappingPoints = [
    draggableRange.top,
    deviceHeight / 3,
    draggableRange.bottom
  ];

  const panelRef = useRef<SlidingUpPanel | null>(null);
  const [panelPositionVal] = useState(new Animated.Value(draggableRange.bottom));

  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [allowDragging, setAllowDragging] = useState(true);
  const [atTop, setAtTop] = useState(true);

  // fired when panel is finished being dragged up or down
  // if panel is dragged to 'top' position, then we switch to scrollmode
  const onMomentumDragEnd = useCallback((value: number) => {
    if (value === draggableRange.top && !scrollEnabled) {
      setScrollEnabled(true);
      setAtTop(true);
    }
  }, [draggableRange, scrollEnabled]);

  // fired when scroll is finished inside the panel,
  // if the content in the panel has scrolled to the very top,
  // then we allow the panel to be dragged down
  // (only if the next gesture is down, not up)
  const onMomentumScrollEnd = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent } = event;
    if (nativeEvent.contentOffset.y === 0) {
      setAtTop(true);
      if (ios) {
        setAllowDragging(true);
      }
    }
  }, []);

  const PANEL_VELOCITY = ios ? 1 : 2.3;
  const hideFullScreenPanelOptions: SlidingUpPanelAnimationConfig = {
    velocity: PANEL_VELOCITY,
    toValue: draggableRange.bottom
  };

  // if panel is at the top and scrolling is allowed
  // check the velocity of the drag,
  // if the velocity is downward, then we animate the panel to its bottom state
  // if the velocity is upward, we treat the drag like a scroll instead
  const onDragStart = useCallback((_: number, gestureState: PanResponderGestureState) => {
    if (atTop && scrollEnabled) {
      if (gestureState.vy > 0) {
        setScrollEnabled(false);
        if (ios) {
          setAllowDragging(true);
        }
        if (panelRef && panelRef.current) {
          panelRef.current.show(hideFullScreenPanelOptions);
        }
      } else {
        setAtTop(false);
        if (ios) {
          setAllowDragging(false);
        }
      }
    }
  }, [atTop, scrollEnabled, panelRef]);

  return (
    <SlidingUpPanel
      ref={panelRef}
      animatedValue={panelPositionVal}
      draggableRange={draggableRange}
      snappingPoints={snappingPoints}
      backdropOpacity={0}
      showBackdrop={false}
      height={deviceHeight}
      allowDragging={allowDragging}
      onMomentumDragEnd={onMomentumDragEnd}
      onDragStart={onDragStart}
    >
      <View style={styles.panelContent}>
        <View style={[styles.grabber]}></View>
        <ScrollView
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          >
          <View style={[styles.item]}></View>
          <View style={[styles.item]}></View>
          <View style={[styles.lastitem]}></View>
          <View style={[styles.item]}></View>
          <View style={[styles.item]}></View>
          <View style={[styles.lastitem]}></View>
          <View style={[styles.item]}></View>
          <View style={[styles.lastitem]}></View>
        </ScrollView>
      </View>
    </SlidingUpPanel>
  );
};

const styles = StyleSheet.create({
  panelContent: {
    flex: 1,
    backgroundColor: 'black'
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: 'blue'
  },
  lastitem: {
    flex: 1,
    margin: 5,
    backgroundColor: 'red'
  },
  grabber: {
    flexGrow: 0.1,
    margin: 5,
    backgroundColor: 'green'
  }
});