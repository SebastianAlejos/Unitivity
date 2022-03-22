import {ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from 'react';

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function};
};

export default function SignUp(props: CompProps) {
  return (
    <ImageBackground source={require("../assets/images/splash_1.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={[styles.box, styles.shadowProp]}>
          <Text style={styles.title}>Unitivity - Create Your Account</Text>
          <TextInput
          placeholderTextColor="#000" 
          style={styles.input}
          placeholder="NAME"
          />
          <TextInput
          secureTextEntry={true}
          placeholderTextColor="#000" 
          style={styles.input}
          placeholder="EMAIL"
          />
          <TextInput
          secureTextEntry={true}
          placeholderTextColor="#000" 
          style={styles.input}
          placeholder="RETYPE EMAIL"
          />
          <Text style={styles.text}>All accounts must be created using a .edu email address.</Text>
          <Pressable style={styles.button} onPress={()=>{ alert('You have created your account successfully'); }}>
            <Text style={styles.label}>Submit</Text>
          </Pressable>
          <Pressable onPress={()=>{props.navigation.goBack()}}>
            <Text style={styles.text}>Cancel</Text>
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
    color: '#6200EE',
    margin: 10, 
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
