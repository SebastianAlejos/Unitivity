import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Alert, Button, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';

const image = { uri: "../assets/images/splash_1.png" };


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ImageBackground source={require("../assets/images/splash_1.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>This is the login screen</Text>
        <Pressable style={styles.button} onPress={()=>{ alert('You have logged in successfully'); }}>
      <Text style={styles.label}>Login</Text>
    </Pressable>
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
    fontSize: 20,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#6200EE',
  },
  label:{
    color: 'white'
  }
});
