import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Platform, useWindowDimensions, StatusBar, PanResponderGestureState, NativeSyntheticEvent, NativeScrollEvent, Pressable, ImageBackground } from "react-native";
import { Header, Button, ButtonGroup, SearchBar, ListItem, Image } from "@react-native-elements/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBarBaseProps } from "@react-native-elements/base/dist/SearchBar/SearchBar";
import React, { useState, useRef, useCallback } from 'react';
import MapView from "react-native-maps";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SlidingUpPanel, { SlidingUpPanelAnimationConfig } from 'rn-sliding-up-panel';

const SafeSearchBar = (SearchBar as unknown) as React.FC<SearchBarBaseProps>;

const ios = Platform.OS === 'ios';

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function };
};

export default function Explore(props: CompProps) {
  // Toggle events/locations variables
  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(0);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);

  // Event contents
  const eventList = [
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    },
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    },
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    },
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    },
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    },
    {
      name: 'Open Lanes Club',
      distance: '5.0 mi',
      shortDate: 'Tomorrow',
      date: 'Tues, June 8',
      startTime: '7:00 PM',
      endTime: '8:30 PM'
    }
  ]

  // Searchbar stuff
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  // For draggable panel

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
  const [panelPositionVal] = useState(new Animated.Value(deviceHeight / 3));

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
    <>
      <Header
        // Header with menu icon and title
        backgroundColor="#FFF"
        barStyle="default"
        centerComponent={{
          text: "Explore",
          style: { color: "#000", fontSize: 36, fontWeight: "700" }
        }}
        leftComponent={<Icon name="menu" color="#000" size={44} onPress={() => props.navigation.navigate('Menu')}></Icon>}
        placement="left"
        rightComponent={
          <Button
            buttonStyle={{
              backgroundColor: '#018786',
              borderRadius: 10,
              width: 40
            }}
            onPress={() => alert("recenter")}
            icon={<Icon
              size={25}
              color="#FFF"
              name="target"
            />}
          />
        }
      />

      <View style={[styles.mapContainer]}>
        <Image source={require('../assets/images/map.png')} style={{ width: '100%', height: '100%' }} />
        < ButtonGroup
          selectedButtonStyle={{ backgroundColor: '#018786' }}
          buttons={["Events", "Locations"]}
          containerStyle={{ borderColor: '#018786', borderWidth: 2, height: 30, marginTop: 0, marginLeft: 0, marginRight: 0 }}
          textStyle={{ color: "#018786", fontWeight: "600" }}
          onPress={selectedIdx =>
            setSelectedIndex(selectedIdx)
          }
          selectedIndex={selectedIndex}
          selectedIndexes={selectedIndexes}
        />

        <Button
          title="Open in Maps"
          buttonStyle={{
            backgroundColor: '#6200EE',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 220,
            marginTop: 360
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={() => props.navigation.navigate('TestPanel')}
        />

        <Button
          title="Create an Event"
          buttonStyle={{
            backgroundColor: '#6200EE',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 220,
            marginTop: 360
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={() => props.navigation.navigate('CreateEventPage1')}
        />
      </View>

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
        <View style={[styles.event_details_container]}>
          <View style={[styles.swipe_tab]}></View>

          <View>
            <SafeSearchBar
              platform="ios"
              placeholder="Search..."
              onChangeText={updateSearch}
              containerStyle={{ backgroundColor: '#F9F9F9' }}
              value={search} theme={{
                colors: undefined
              }} />
          </View>

          <ScrollView
            scrollEnabled={scrollEnabled}
            showsVerticalScrollIndicator={false}
            bounces={false}
            onMomentumScrollEnd={onMomentumScrollEnd}
          >

            {
              eventList.map((event, i) => (
                <ListItem
                  key={i}
                  containerStyle={{ backgroundColor: '#F9F9F9' }}
                  bottomDivider
                >
                  <Pressable style={{ flex: 1 }} onPress={() => { props.navigation.navigate('Event_Details') }}>
                    <View style={[styles.container, { flexDirection: "column" }]}>
                      <View style={{ flex: 6, flexDirection: "row" }}>
                        <View style={{ flex: 6 }}><Text style={[styles.title]}>{event.name}</Text></View>
                        <View style={{ flex: 1 }}><Icon name="heart-outline" color="#000" size={30} onPress={() => alert("favorite")}></Icon></View>
                        <View style={{ flex: 1 }}><Icon name="plus" color="#000" size={30} onPress={() => alert("add event")}></Icon></View>
                      </View>
                      <View style={{ flex: 4, flexDirection: "row", }} ><Text style={[styles.subtitle]}>{event.distance} · </Text>
                        <Text style={[styles.special_sub]}>{event.shortDate}</Text></View>
                      <View style={{ flex: 4 }} ><Text style={[styles.subtitle]}>{event.date}</Text></View>
                      <View style={{ flex: 4 }} />
                      <View style={{ flex: 4 }} ><Text style={[styles.subtitle]}>{event.startTime} - {event.endTime}</Text></View>
                    </View>
                  </Pressable>
                </ListItem>
              ))
            }
          </ScrollView>
        </View>
      </SlidingUpPanel>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    height: 100
  },
  mapContainer: {
    backgroundColor: 'lightgray',
    height: 700,
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 15,
    color: 'gray'
  },
  special_sub: {
    fontSize: 15,
    color: '#03DAC6',
    fontWeight: "600"
  },
  swipe_tab: {
    width: 50,
    height: 6,
    borderRadius: 3,
    backgroundColor: "lightgray",
    marginHorizontal: 175,
    marginTop: 6
  },
  event_details_container: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});