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

        <View style={[styles.header]}>
          <Image style={[styles.background_image]}source={require('../assets/images/splash_2.png')}/>
        </View>
        
        <View style={[styles.info_container]}>
          <View style={{flex: 1}}/>
          <View style={[styles.label_container]}>
            <Text style={[styles.label]}>Name</Text>
          </View>
          <View style={[styles.field_container]}>
            <Text style={[styles.field]}>Joe Jenkins</Text>
          </View>
          <View style={[styles.label_container]}>
            <Text style={[styles.label]}>Email</Text>
          </View>
          <View style={[styles.field_container]}>
            <Text style={[styles.field]}>example@messiah.edu</Text>
          </View>
          <View style={[styles.label_container]}>
            <Text style={[styles.label]}>My College</Text>
          </View>
          <View style={[styles.field_container]}>
            <Text style={[styles.field]}>Messiah University</Text>
          </View>
          <View style={{flex: 3}}>
            <View style={{flex: 2, flexDirection: 'row', margin: 5}}>
              <View style={{flex: 4, marginLeft: 24, justifyContent: 'flex-end'}}>
                <Text style={[styles.label]}>Ranking</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end', alignContent: 'center'}}>
                <Text style={{fontSize: 14}}>Leader</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Icon name="check-decagram" size={26} color='#5D93E2'/>
              </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'blue'}}>
              
            </View>
            <View style={{flex: 2, padding: 5, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: '#838383'}}>126 / 300 </Text>
              <Icon name="heart" color="#838383" size={16}/>
            </View>
          </View>
          <View style={[styles.title_container]}>
            <Text style={[styles.title]}>FILTERS</Text>
          </View>
          <View style={[styles.distance_container]}>
            <View style={[styles.label_container]}>
              <Text style={[styles.label]}>Distance (mi)</Text>
            </View>
            <View style={{flex: 3, backgroundColor: 'blue'}}>
              
            </View>
          </View>
          <View style={[styles.tags_container]}>
            <View style={[styles.label_container]}>
              <Text style={[styles.label]}>Excluded Tags</Text>
            </View>
            <View style={{flex: 3, backgroundColor: 'blue'}}>
              
            </View>
          </View>
        </View>

        <Icon name="menu" color="#000" size={44} style={[styles.menu]} onPress={() => props.navigation.navigate('Menu')}></Icon>
        <View style={[styles.profile_img_container]}>
            <Image style={[styles.profile_img]} source={require('../assets/images/mu_logo.gif')}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 8
    },
    background_image: {
      transform: [{ translateY: -620 }]
    },
    menu: {
      marginLeft: 30,
      marginTop: 70,
      position: 'absolute'
    },
    profile_img: {
      borderRadius: 100,
      width: 134,
      height: 134
    },
    profile_img_container: {
      position: 'absolute',
      top: 150,
      left: 126,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {width: 2, height: 2},
      shadowRadius: 5
    },
    info_container: {
      backgroundColor: '#FAFAFA',
      flex: 22
    },
    label: {
        color: '#838383',
        fontSize: 12
    },
    label_container: {
      flex: 1,
      marginHorizontal: 15,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 5,
      paddingLeft: 14
    },
    field_container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingLeft: 10,
      marginHorizontal: 20,
      borderBottomColor: '#C6C6C8',
      borderBottomWidth: 1,
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    field: {
      color: '#000',
      fontSize: 14
    },
    title_container: {
      flex: 1,
      backgroundColor: '#FFF',
      borderBottomColor: '#C6C6C8',
      borderBottomWidth: 1,
      padding: 5,
      paddingLeft: 30,
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    title: {
      color: '#000',
      fontSize: 12
    },
    distance_container: {
      flex: 3
    },
    tags_container: {
      flex: 3
    }
  });