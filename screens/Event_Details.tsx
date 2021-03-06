import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity, Image, Pressable } from "react-native";
import { Header, Button, Overlay } from "@react-native-elements/base";
import { NavigationContainer } from '@react-navigation/native';


type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function };
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
    url: 'https://www.messiah.edu'
  }

  // Options menu overlay variables
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={{ backgroundColor: '#EEE', flex: 2.5 }}>
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
                <Icon name="dots-horizontal-circle-outline" size={30} onPress={toggleOverlay} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, color: '#018786' }}>{eventDeets.date}</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 4, flexDirection: 'row', borderBottomRightRadius: 30 }}>
            <ScrollView style={[styles.info_container]}>
              <Text style={{ fontSize: 14, lineHeight: 20 }}>{eventDeets.description}</Text>
            </ScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate('Gallery')} style={{ flex: 0.8 }}>

              <View style={[styles.gallery_container]}>
                <View style={{ flex: 2, margin: 2, justifyContent: 'center' }}>
                  <Image style={{ flex: 1, borderRadius: 10, width: '100%' }} source={require('../assets/images/bike_pic.jpeg')} resizeMode='cover' />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, margin: 2 }}>
                    <Image style={{ flex: 1, borderRadius: 10, width: '100%' }} source={require('../assets/images/bike_pic.jpeg')} resizeMode='cover' />
                  </View>
                  <View style={{ flex: 1, margin: 2 }}>
                    <Image style={{ flex: 1, borderRadius: 10, width: '100%' }} source={require('../assets/images/bike_pic.jpeg')} resizeMode='cover' />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, margin: 2 }}>
                    <Image style={{ flex: 1, borderRadius: 10, width: '100%' }} source={require('../assets/images/bike_pic.jpeg')} resizeMode='cover' />
                  </View>
                  <View style={{ flex: 1, margin: 2 }}>
                    <Image style={{ flex: 1, borderRadius: 10, width: '100%' }} source={require('../assets/images/bike_pic.jpeg')} resizeMode='cover' />
                  </View>
                </View>
                <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <Text style={{ color: '#707070', textDecorationLine: 'underline' }}>see more...</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.8, flexDirection: 'row', borderBottomRightRadius: 30 }}>
            <Icon name="heart-outline" style={{ marginLeft: 20 }} size={30} onPress={() => alert('favorite')} />
            <Icon name="plus" size={30} style={{ marginLeft: 15 }} onPress={() => alert('add event')} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ flex: 3 }}>
          <View style={[styles.location_info_container]}>
            <View style={[styles.top_info_container]}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 3, fontSize: 40, fontWeight: '700' }}>{eventDeets.distance}</Text>
                <Button
                  title="Open in Maps"
                  buttonStyle={{
                    backgroundColor: '#6200EE',
                    borderRadius: 30,
                    height: 40
                  }}
                  containerStyle={{ width: 120, flex: 2 }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                  onPress={() => alert("open maps")}
                />
              </View>
              <Text style={{ fontSize: 12 }}>from your current destination</Text>
            </View>
            <View style={[styles.bottom_info_container]}>
              <Text style={{ flex: 1, marginTop: 10 }}>{eventDeets.address}</Text>
              <View style={{ flexDirection: 'row', flex: 1, alignContent: 'center' }}>
                <Text onPress={() => Linking.openURL(eventDeets.url)} style={{ textDecorationLine: 'underline' }}>{eventDeets.url}</Text>
                <Icon name="arrow-top-right-thick" size={16} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Overlay isVisible={visible} 
        onBackdropPress={toggleOverlay}
        overlayStyle={[styles.overlay_style]}>
        <Pressable style={[styles.overlay_button]} onPress={() => alert('Share')}>
          <Text style={{fontSize: 16}}>Share</Text>
        </Pressable>
        <Pressable style={[styles.overlay_button]} onPress={() => alert('Report')}>
          <Text style={{fontSize: 16, color: '#B00020'}}>Report</Text>
        </Pressable>
        <Pressable style={[styles.overlay_button]} onPress={() => props.navigation.navigate('Calendars')}>
          <Text style={{fontSize: 16}}>Add to Events</Text>
        </Pressable>
      </Overlay>
    </>
  )
}

const styles = StyleSheet.create({
  back_header: {
    flex: 1,
    marginLeft: 40,
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
    flex: 1,
    margin: 20,
    marginLeft: 0,
    overflow: 'hidden'
  },
  location_info_container: {
    flex: 1,
    backgroundColor: '#EEE',
    padding: 40,
    borderTopLeftRadius: 60
  },
  top_info_container: {
    flex: 1,
    marginRight: -20
  },
  bottom_info_container: {
    flex: 1,
    borderTopColor: '#CBCBCB',
    borderTopWidth: 0.5
  },
  main_container: {
    flex: 8,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 60
  },
  overlay_style: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    padding: 0
  },
  overlay_button: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopWidth: 0.5,
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center'
  }
});