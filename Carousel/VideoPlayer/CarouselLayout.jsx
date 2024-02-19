import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Carousel} from '../Carousel';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import L2View from '../Screen/L2View';

const Stack = createNativeStackNavigator();

export default function CarouselLayout() {
  
  // console.log(data);
  return (
    <Stack.Navigator initialRouteName="Carousel">
      <Stack.Screen
        name="Carousel"
        component={Carousel}
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
            // minHeight: '350'
          },
          // passProps: { data },
        }}
      />
      <Stack.Screen
        name="L2View"
        component={L2View}
        
        options={{headerShown: false, presentation:'fullScreenModal', 
        }}
      />
    </Stack.Navigator>
    // <Carousel/>
  );
}
