import React from 'react';
import {View, Dimensions} from 'react-native';
import CarouselLayout from './VideoPlayer/CarouselLayout';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CarouselComponent = () => {
  // console.log(data);
  return (
    <View style={{
      height:350
    }}>
      <CarouselLayout />
    </View>
  );
};
