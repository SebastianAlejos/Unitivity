import {Text, Pressable, StyleSheet, View } from "react-native";
import React from 'react';

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function};
};

export default function Menu(props: CompProps) {
  return (
    <View style={styles.container}>
        <Pressable  onPress={()=>{alert('Explore will be here')}}>
            <Text style={styles.text }>Explore</Text>
        </Pressable>
        <Pressable  onPress={()=>{alert('Events will be here')}}>
            <Text style={styles.text }>Events</Text>
        </Pressable> 
        <Pressable  onPress={()=>{alert('Profile will be here')}}>
            <Text style={styles.text }>Profile</Text>
        </Pressable> 
        <Pressable  onPress={()=>{alert('Preferences will be here')}}>
            <Text style={styles.text }>Preferences</Text>
        </Pressable> 
        <Pressable  onPress={()=>{alert('Favorites will be here')}}>
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
  },
});