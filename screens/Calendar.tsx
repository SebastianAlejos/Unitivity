import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, ImageBackground } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

type CompProps = {
    navigation: { navigate: Function; goBack:Function};
  };
  export default function Calendars(props: CompProps) {
    return (
             <View style={styles.container}>
             <Icon name="menu" size={44} style={styles.icon} onPress={() => props.navigation.navigate('Menu')}></Icon>
             <CalendarStrip
                style={styles.calendar}
                selectedDate={'2022-04-07'}
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
    </View>
    )};
 const styles = StyleSheet.create({
     image: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: "center"
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
        top:100, 
    },
});     