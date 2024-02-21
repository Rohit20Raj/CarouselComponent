import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  AppState,
} from 'react-native';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function VideoPlayer({id, url, poster, paused, index}) {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('L2View', {
      index: index,
      url: url,
      id: id,
      poster: poster,
    });
  };
  const [appState, setAppState] = useState(AppState.currentState);
  const [bgPaused, setBGPaused] = useState(false);
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    if (appState === 'active') {
      setBGPaused(false);
    }
  }, [appState]);

  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      setBGPaused(false);
    } else {
      setBGPaused(true);
    }
    setAppState(nextAppState);
  };
  return (
    <View
      style={{
        marginHorizontal: 5,
      }}>
      {/* <Text>index = {index}</Text> */}
      <ImageBackground
        source={{
          uri: poster,
        }}
        resizeMode="cover"
        style={{
          overflow: 'hidden',
          borderRadius: 20,
        }}>
        <TouchableHighlight onPress={handleNavigation}>
          <Video
            source={{uri: url}}
            poster={poster}
            muted={true}
            repeat={true}
            paused={paused || bgPaused}
            posterResizeMode="cover"
            resizeMode="cover"
            style={{
              height: 300,
              width: 200,
              overflow: 'hidden',
              borderRadius: 20,
            }}
          />
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}
