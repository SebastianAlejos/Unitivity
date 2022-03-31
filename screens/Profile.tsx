import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Platform, useWindowDimensions, StatusBar, PanResponderGestureState, NativeSyntheticEvent, NativeScrollEvent, ImageBackground } from "react-native";
import { Header, Button, ButtonGroup, SearchBar, ListItem } from "@react-native-elements/base";
import { Image } from 'react-native';

type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function;};
  };

export default function Explore(props: CompProps) {

    return (
        <>

        <Image style={[styles.background_image]}source={require('../assets/images/splash_2.png')}/>
        <Icon name="menu" color="#000" size={44} style={[styles.menu]} onPress={() => props.navigation.navigate('Menu')}></Icon>
        <Image style={[styles.profile_img]} source={require('../assets/images/unitivity_logo.png')}/>

        </>
    )
}

const styles = StyleSheet.create({
    background_image: {
      transform: [{ translateY: -620 }]
    },
    menu: {
      marginLeft: 30,
      marginTop: 80,
      position: 'absolute'
    },
    profile_img: {
      borderRadius: 100,
      width: 150,
      height: 150,
      position: 'absolute',
      top: 150,
      left: 120,
      shadowColor: '#000',
      shadowOpacity: 50,
      shadowOffset: {width: 2, height: 10},
      shadowRadius: 20
    }
  });