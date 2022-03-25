import { StyleSheet, Text, View, ScrollView } from "react-native";
import {Header, Button, ButtonGroup, SearchBar, ListItem } from "@react-native-elements/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBarBaseProps } from "@react-native-elements/base/dist/SearchBar/SearchBar";
import React, { useState } from 'react';
import MapView from "react-native-maps";

const SafeSearchBar = (SearchBar as unknown) as React.FC<SearchBarBaseProps>;
type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack:Function};
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
    }
  ]

  // Searchbar stuff
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

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
        centerContainerStyle={{}}
        leftComponent={<Icon name="menu" color="#000" size={44} onPress={() => props.navigation.navigate('Menu')}></Icon>}
        leftContainerStyle={{}}
        placement="left"
        rightComponent={
          <Button
            title=""
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
        rightContainerStyle={{}}
        statusBarProps={{}}
      />

      <View style={[styles.mapContainer]}>
        <MapView
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
        />

        <ButtonGroup
          selectedButtonStyle={{ backgroundColor: '#018786' }}
          buttons={["Events", "Locations"]}
          containerStyle={{borderColor: '#018786', borderWidth: 2, height: 30, marginTop: 0, marginLeft: 0, marginRight: 0}}
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
            marginTop: 405
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={() => alert("open maps app")}
        />
      </View>

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
            }}          />
        </View>

        <ScrollView>
          {
            eventList.map((event, i) => (
              <ListItem
                key={i}
                containerStyle={{backgroundColor: '#F9F9F9'}}
                bottomDivider
              >
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
              </ListItem>
            ))
          }
        </ScrollView>
      </View>

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
    height: 500,
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
    color: '#018786',
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
    // Make ability to pull up and down
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});