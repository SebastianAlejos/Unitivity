import {Text, Pressable, StyleSheet, View } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function};
};

export default function Menu(props: CompProps) {
  return (
    <View style={styles.container}>
        <Icon name='close' style={styles.icon} size={44} onPress={() =>{props.navigation.goBack()}}></Icon>
        <Pressable style={styles.pressable}  onPress={()=> props.navigation.navigate('Explore')}>
            <Icon name="magnify" style={styles.icons} size={44}></Icon>
            <Text style={styles.text }>Explore</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={()=>props.navigation.navigate('Events')}>
            <Icon name="calendar-month" style={styles.icons} size={44}></Icon>
            <Text style={styles.text}>Events</Text>
        </Pressable> 
        <Pressable style={styles.pressable} onPress={()=>{alert('Profile will be here')}}>
            <Icon name="account-circle" style={styles.icons} size={44}></Icon>
            <Text style={styles.text }>Profile</Text>
        </Pressable> 
        <Pressable style={styles.pressable} onPress={()=>{alert('Preferences will be here')}}>
            <Icon name="cog" style={styles.icons} size={44}></Icon>
            <Text style={styles.text }>Preferences</Text>
        </Pressable> 
        <Pressable style={styles.pressable} onPress={()=>{alert('Favorites will be here')}}>
            <Icon name="heart-circle" style={styles.icons} size={44}></Icon>
            <Text style={styles.text }>Favorites</Text>
        </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03DAC6'
  },
  text:{
    color: '#FFFF',
    fontSize: 30,
    fontWeight:'bold',
    margin:15,
    marginTop:5
  },
  icon:{
    color:"#FFFF", 
    alignSelf: 'flex-start',
    position: 'absolute',
    top:85,
    left: 30,
  },
  icons:{
      color: '#FFFF',
      margin:0, 
  },
  pressable:{
    flexDirection:'row', 
    flexWrap:'wrap',
    margin:10
  },
});