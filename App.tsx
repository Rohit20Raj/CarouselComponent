/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {CarouselComponent} from './Carousel';
import {DATA} from './data'
import L2View from './Carousel/Screen/L2View';
// import CarouselComponent from '@rohitrajvns2020/carouselcomponent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './UserComponent/HomeScreen';
import CarouselLayout from './Carousel/VideoPlayer/CarouselLayout';

const Stack = createNativeStackNavigator();

const windowHeight = Dimensions.get("window").height;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carousel">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="L2View"
        component={L2View}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    {/* <ScrollView>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, facere quia tempora atque in doloremque, corporis, quas asperiores pariatur numquam officiis voluptate culpa vero esse laudantium earum quibusdam est inventore porro vel ipsum accusantium. Aut, nisi ullam quaerat ea id rerum impedit suscipit quo ut quas at, excepturi natus itaque.
      </Text>
      <CarouselComponent/>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, facere quia tempora atque in doloremque, corporis, quas asperiores pariatur numquam officiis voluptate culpa vero esse laudantium earum quibusdam est inventore porro vel ipsum accusantium. Aut, nisi ullam quaerat ea id rerum impedit suscipit quo ut quas at, excepturi natus itaque.
      </Text>
    </ScrollView> */}
    </NavigationContainer>
  );
}

export default App;
