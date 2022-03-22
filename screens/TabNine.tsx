import { Alert, Button, ImageBackground, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from 'react';

const image = { uri: "../assets/images/splash_1.png" };


export default function TabNineScreen() {
  return (
    <ImageBackground source={require("../assets/images/splash_1.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={[styles.box, styles.shadowProp]}>
          <Text style={styles.title}>Events</Text>
          <Text>The description of the event will go here, along with any important information that the event creator has to say. </Text>
          <Pressable style={styles.button} onPress={()=>{ alert('You have successfully entered the code.'); }}>
            <Text>Add to schedule</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#6200EE'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: "center"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:'10%',
    width:'60%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#6200EE',
    marginTop:20,
  },
  subutton: {
    alignItems: 'center',
    marginTop:20,
    justifyContent: 'center',
    height:'10%',
    width:'60%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#3700B3',
  },
  label:{
    fontSize:15,
    color: 'white'
  },
  input: {
    backgroundColor:'#f9fafa',
    height: 40,
    width:'70%', 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:'#F4F4F4'
  },
  box:{
    alignItems: 'center',
    justifyContent: 'center',
    height:'70%', 
    width:'80%',
    borderRadius:15, 
    backgroundColor:'#F4F4F4',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});