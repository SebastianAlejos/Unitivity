import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native';
import styles from './styles';

function CarouselItem({ item }, parallaxProps) {
  return (
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={item.source} /* the source of the image */
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */ 
        />
      </SafeAreaView>
  );
}

export default CarouselItem;