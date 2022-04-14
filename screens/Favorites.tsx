import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Platform, useWindowDimensions, StatusBar, PanResponderGestureState, NativeSyntheticEvent, NativeScrollEvent, ImageBackground } from "react-native";
import { Header, Button, ButtonGroup, SearchBar, ListItem } from "@react-native-elements/base";
import Event_Details from './Event_Details';

type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function;};
  };

export default function Explore(props: CompProps) {

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

    return (
        <>
        <ImageBackground source={require("../assets/images/splash_2.png")} resizeMode="cover" style={styles.image}>
            <Header
                // Header with menu icon and title
                containerStyle={[styles.header]}
                backgroundColor="#FFF"
                barStyle="default"
                centerComponent={{
                    text: "Favorites",
                    style: { color: "#000", fontSize: 36, fontWeight: "700" }
                }}
                leftComponent={<Icon name="menu" color="#000" size={44} onPress={() => props.navigation.navigate('Menu')}></Icon>}
                placement="left"
            ></Header>

                <ScrollView>
                {
                eventList.map((event, i) => (
                    <ListItem
                    key={i}
                    containerStyle={{ backgroundColor: '#FFF' }}
                    bottomDivider
                    >
                    <View style={[styles.container, { flexDirection: "column" }]}>
                        <View style={{ flex: 6, flexDirection: "row" }}>
                        <View style={{ flex: 7 }}><Text style={[styles.title]} onPress={()=> props.navigation.navigate('Event_Details')}>{event.name}</Text></View>
                        <View style={{ flex: 1 }}><Icon name="heart" color="#000" size={30} onPress={() => alert("favorite")}></Icon></View>
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
          </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    container: {
      flex: 1,
      padding: 2,
      height: 100
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
    image: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: "center"
      }
  });