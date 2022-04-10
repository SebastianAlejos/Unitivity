import React from 'react';
import { StyleSheet, View, Text, Button, Platform, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import { Header, ListItem } from '@react-native-elements/base';

type CompProps = {
  navigation: { navigate: Function; goBack:Function};
  };
  export default function Calendars(props: CompProps) {
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
    return(
      <ImageBackground source={require("../assets/images/splash_2.png")} resizeMode="cover" style={styles.image}>
        <Header
                // Header with menu icon and title
                containerStyle={[styles.header]}
                backgroundColor="#FFF"
                barStyle="default"
                centerComponent={{
                    text: "Events",
                    style: { color: "#000", fontSize: 36, fontWeight: "700" }
                }}
                centerContainerStyle={{}}
                leftComponent={<Icon name="menu" color="#000" size={44} onPress={() => props.navigation.navigate('Menu')}></Icon>}
                leftContainerStyle={{}}
                placement="left"
                rightComponent={{}}
                rightContainerStyle={{}}
                statusBarProps={{}}
            ></Header>
        <View style={styles.container}> 
          <CalendarStrip
            style={styles.calendar}
              selectedDate={'2022-04-10'}
              onPressDate={(date) => {
                  this.setState({ selectedDate: date });
                }}
                onPressGoToday={(today) => {
                }}
                onSwipeDown={() => {
                    alert('onSwipeDown');
                }}
                markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
                weekStartsOn={0} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
          />
          <ScrollView>
                {
                eventList.map((event, i) => (
                    <ListItem
                    key={i}
                    containerStyle={{ backgroundColor: '#FFF' }}
                    bottomDivider
                    >
                    <View style={[styles.events, { flexDirection: "column" }]}>
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
        </View>
      </ImageBackground>
    )};
 const styles = StyleSheet.create({
     image: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: "center"
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
    icon:{
        color:"#018786", 
        alignSelf: 'flex-start',
        position: 'absolute',
        top:85,
        left: 30,
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    calendar:{
        borderRadius:90,
        backgroundColor: '#FFFF',
        position: 'relative',
        top:10, 
    },
    box:{
      alignItems: 'center',
      justifyContent: 'center',
      height:'80%', 
      width:'100%',
      borderRadius:25, 
      backgroundColor:'#F4F4F4',
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
    events:{
      paddingTop:20,
      height: '100%', 
      width:'100%', 
      borderRadius:25, 
    },
    header: {
      borderColor: '#000'
  },
});     