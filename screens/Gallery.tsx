import React from 'react';
import { View, StyleSheet } from 'react-native';
import data from '../screens/Gallery_Files/data';
import CustomSlider from '../screens/Gallery_Files/Custom_Slider';
import { Header } from "@react-native-elements/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// You can import from local files

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function };
};

// or any pure javascript modules available in npm
export default function Gallery(props: CompProps) {
  return (
    <>
      <View style={[styles.back_header]}>
            <Icon name="arrow-left-circle-outline" color="#000" size={32} onPress={() => props.navigation.goBack()}></Icon>
      </View>
      <View style={{ flex: 2 }}>
        <CustomSlider data={data} />
      </View>
      <View style={{ flex: 1 }} />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  back_header: {
    flex: 0.5,
    marginLeft: 40,
    marginTop: 80
  }
});