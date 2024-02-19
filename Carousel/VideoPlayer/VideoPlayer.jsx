import React from 'react';
import {View, Text, ImageBackground, Pressable, TouchableOpacity, TouchableHighlight} from 'react-native';
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
            paused={paused}
            posterResizeMode="cover"
            resizeMode="cover"
            style={{
              height: 300,
              width: 200,
              overflow: 'hidden',
              borderRadius: 20,
              borderColor: 'orange',
              borderWidth: 2,
            }}
          />
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}
