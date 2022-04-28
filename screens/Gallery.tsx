import React from 'react';
import { View } from 'react-native';
import data from '../screens/Gallery_Files/data';
import CustomSlider from '../screens/Gallery_Files/Custom_Slider';
// You can import from local files

// or any pure javascript modules available in npm
export default function Gallery() {
  return (
    <View>
      <CustomSlider data={data} />
    </View>
  );
}