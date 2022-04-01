import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Platform, useWindowDimensions, StatusBar, PanResponderGestureState, NativeSyntheticEvent, NativeScrollEvent, ImageBackground } from "react-native";
import { Header, Button, ButtonGroup, SearchBar, ListItem, Slider, Chip } from "@react-native-elements/base";
import { Image } from 'react-native';

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; };
};

export default function Explore(props: CompProps) {

  return (
    <>
      <ScrollView style={{ flex: 1 }}>

        <View style={[styles.header]}>
          <Image style={[styles.background_image]} source={require('../assets/images/top_splash.png')} />
        </View>

        <View style={[styles.info_container]}>
          <View style={{ flex: 2 }} />
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

          <View style={{ flex: 6 }}>
            <View style={{ flex: 2, flexDirection: 'row', margin: 5 }}>
              <View style={{ flex: 4, marginLeft: 24, justifyContent: 'flex-end' }}>
                <Text style={[styles.label]}>Ranking</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end', alignContent: 'center' }}>
                <Text style={{ fontSize: 14 }}>Leader</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Icon name="check-decagram" size={22} color='#5D93E2' />
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Slider
                animationType="spring"
                maximumTrackTintColor="#FFF"
                maximumValue={100}
                minimumTrackTintColor="#6200EE"
                minimumValue={0}
                orientation="horizontal"
                allowTouchTrack
                step={1}
                style={{
                  width: "80%",
                  borderRadius: 2,
                  borderColor: "#828282"
                }}
                thumbStyle={{ height: 1, width: 1, backgroundColor: '#6200EE' }}
                thumbTouchSize={{ height: 30, width: 30 }}
                trackStyle={{
                  height: 10,
                  borderRadius: 20,
                  borderColor: "#828282",
                  borderWidth: 1
                }}
                value={100}
              />
            </View>
            <View style={{ flex: 2, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ color: '#838383' }}>126 / 300 </Text>
              <Icon name="heart" color="#838383" size={16} />
            </View>
          </View>

          <View style={[styles.title_container]}>
            <Text style={[styles.title]}>FILTERS</Text>
          </View>

          <View style={[styles.distance_container]}>
            <View style={[styles.label_container]}>
              <Text style={[styles.label]}>Distance (mi)</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Slider
                animationType="timing"
                maximumTrackTintColor="#9C9C9C"
                maximumValue={5}
                minimumTrackTintColor="#9C9C9C"
                minimumValue={0}
                allowTouchTrack
                onSlidingComplete={() =>
                  console.log("onSlidingComplete()")
                }
                onSlidingStart={() =>
                  console.log("onSlidingStart()")
                }
                onValueChange={value =>
                  console.log("onValueChange()", value)
                }
                orientation="horizontal"
                step={1}
                style={{ width: "80%" }}
                thumbStyle={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#018786"
                }}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 1 }}
                value={100}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Text>5</Text>
              <Text>10</Text>
              <Text>20</Text>
              <Text>30</Text>
              <Text>40</Text>
              <Text>MAX</Text>
            </View>
          </View>

          <View style={[styles.tags_container]}>
            <View style={[styles.label_container]}>
              <Text style={[styles.label]}>Excluded Tags</Text>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', marginHorizontal: 30, flexWrap: 'wrap' }}>
              <Chip
                title="tag"
                titleStyle={{ color: '#666' }}
                buttonStyle={[styles.tag]}
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 16,
                  color: '#666',
                }}
                iconRight
                containerStyle={{ marginVertical: 5 }}
              />
              <Chip
                title="tag"
                titleStyle={{ color: '#666' }}
                buttonStyle={[styles.tag]}
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 16,
                  color: '#666',
                }}
                iconRight
                containerStyle={{ marginVertical: 5 }}
                style={[styles.tag]}
              />
              <Chip
                title="tag"
                titleStyle={{ color: '#666' }}
                buttonStyle={[styles.tag]}
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 16,
                  color: '#666',
                }}
                iconRight
                containerStyle={{ marginVertical: 5 }}
                style={[styles.tag]}
              />

            </View>
          </View>
          
          <View style={{ flex: 5 }}></View>
        </View>
        <View style={[styles.profile_img_container]}>
          <Image style={[styles.profile_img]} source={require('../assets/images/mu_logo.gif')} />
        </View>
      </ScrollView>

      <Icon name="menu" color="#000" size={44} style={[styles.menu]} onPress={() => props.navigation.navigate('Menu')}></Icon>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  background_image: {
    height: 186,
    width: 390,
    resizeMode: 'stretch'
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
    top: 116,
    left: 126,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5
  },
  info_container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    height: 800
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
    flex: 6,
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 0.5
  },
  tags_container: {
    flex: 6
  },
  tag: {
    backgroundColor: '#DFDFDF',
    marginHorizontal: 5,
    height: 40
  }
});