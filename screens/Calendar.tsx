import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, ImageBackground } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function; goBack:Function};
  };
  
  export default function Calendars(props: CompProps) {
    return (
        <ImageBackground source={require("../assets/images/splash_1.png")} resizeMode="cover" style={styles.image}>
             <View style={styles.container}>
             <Calendar
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                    console.log('month changed', month);
                }}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                enableSwipeMonths={true}
                />
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});