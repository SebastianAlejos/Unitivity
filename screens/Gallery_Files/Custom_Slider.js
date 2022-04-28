import * as React from 'react';
import { Dimensions, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "../Gallery_Files/Carosel_Item";
import styles from "../Gallery_Files/styles";

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}