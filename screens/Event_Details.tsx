import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Platform, useWindowDimensions, StatusBar, PanResponderGestureState, NativeSyntheticEvent, NativeScrollEvent, ImageBackground } from "react-native";
import { Header, Button, ButtonGroup, SearchBar, ListItem } from "@react-native-elements/base";

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; };
};

export default function Event_Details(props: CompProps) {

  // Event contents
  const eventDeets =
  {
    name: 'Open Lanes Club',
    distance: '5.0 mi',
    date: 'Tues, June 8',
    startTime: '7:00 PM',
    endTime: '8:30 PM',
    description: 'The description of the event will go here, along with any important information that the event creator has to say. The description of the event will go here, along with any important information that the event creator has to say. The description of the event will go here, along with any important information that the event creator has to say. The description of the event will go here, along with any important information that the event creator has to say.',
    address: '1 University Avenue, Mechanicsburg, PA',
    url: 'www.messiah.edu'
  }

  return (
    <>
      <View style={[styles.main_container]}>
        <View style={[styles.back_header]}>
          <Icon name="arrow-left-circle-outline" color="#000" size={32} onPress={() => props.navigation.goBack()}></Icon>
        </View>

        <View style={[styles.header_container]}>
          <View style={[styles.header_status_icon_container]}>
            <View style={{ flex: 1 }}>
              <Icon name="check-decagram" size={30} color='#5D93E2' />
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={[styles.header_name_time_container]}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>{eventDeets.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, color: '#018786' }}>{eventDeets.startTime}  - {eventDeets.endTime}</Text>
            </View>
          </View>
          <View style={[styles.header_info_date_container]}>
            <View style={{ flex: 1 }}>
              <Icon name="dots-horizontal-circle-outline" size={30} onPress={() => alert('open info')} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, color: '#018786' }}>{eventDeets.date}</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 4, flexDirection: 'row' }}>
          <ScrollView style={[styles.info_container]}>
            <Text>{eventDeets.description}</Text>
          </ScrollView>
          <View style={[styles.gallery_container]}>

          </View>
        </View>

        <View style={{ flex: 0.8, flexDirection: 'row' }}>
          <Icon name="heart-outline" style={{ marginLeft: 20 }} size={30} onPress={() => alert('favorite')} />
          <Icon name="plus" size={30} style={{ marginLeft: 15 }} onPress={() => alert('add event')} />
        </View>
      </View>

      <View style={[styles.location_info_container]}>
        <View style={[styles.top_info_container]}>

        </View>
        <View style={[styles.bottom_info_container]}>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  back_header: {
    flex: 1,
    marginLeft: 50,
    marginTop: 80
  },
  header_container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 0.5
  },
  header_status_icon_container: {
    flex: 2,
    marginLeft: 20
  },
  header_name_time_container: {
    flex: 9
  },
  header_info_date_container: {
    flex: 5,
    alignItems: 'flex-end',
    marginRight: 20
  },
  info_container: {
    flex: 1,
    margin: 20
  },
  gallery_container: {
    flex: 0.8,
    margin: 20,
    marginLeft: 0,
    backgroundColor: 'green'
  },
  location_info_container: {
    flex: 2,
    backgroundColor: '#EEEEDD',
    padding: 40
  },
  top_info_container: {
    flex: 1
  },
  bottom_info_container: {
    flex: 1,
    borderTopColor: '#CBCBCB',
    borderTopWidth: 0.5
  },
  main_container: {
    flex: 8,
    shadowColor: '#000',
    shadowOpacity: 90,
    shadowRadius: 5,
    backgroundColor: '#FFF'
  }
});