import * as React from 'react';
import { Dimensions, View, Text, Button } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "../Gallery_Files/Carosel_Item";
import styles from "../Gallery_Files/styles";
import CustomPaging from "../Gallery_Files/Custom_Paging";

export default function CustomSlider({ data }) {

const [slideIndex, setSlideIndex] = React.useState(0);
const { width } = Dimensions.get("window");
const carouselRef = React.useRef(null);

  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    onSnapToItem: (index) => setSlideIndex(index),
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel ref={carouselRef} {...settings} />
      <CustomPaging data={data} activeSlide={slideIndex} />
    </View>
  );
}