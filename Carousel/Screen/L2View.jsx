import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-video';
import {DATA} from '../VideoData/data';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {SpeakerXMarkIcon, XMarkIcon} from 'react-native-heroicons/outline';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function L2View() {
  const navigation = useNavigation();
  const route = useRoute();
  const {index, id, url, poster} = route.params;
  const [currentIndex, setCurrentIndex] = useState(index);
  const [mute, setMute] = useState(true);

  useEffect(() => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  }, [index]);

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}>
      {/* <Text>index={index}</Text> */}
      <ScrollView horizontal>
        <SwiperFlatList
          vertical={true}
          data={DATA}
          index={currentIndex}
          renderItem={({item, index}) => (
            <View style={{position: 'relative'}}>
              <TouchableWithoutFeedback onPress={() => setMute(!mute)}>
                <View>
                  <Video
                    source={{uri: item.url}}
                    poster={item.thumbnail}
                    muted={mute}
                    repeat={true}
                    paused={currentIndex === index ? false : true}
                    resizeMode="cover"
                    posterResizeMode="cover"
                    style={{
                      height: windowHeight,
                      width: windowWidth,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: windowHeight / 4,
                      left: windowWidth / 2,
                    }}>
                    {mute && <SpeakerXMarkIcon color="black" fill="white" size={50}/>}
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
                <XMarkIcon color="white" size={42}/>
              </TouchableOpacity>
            </View>
          )}
          onMomentumScrollEnd={({index}) => {
            setCurrentIndex(index);
          }}
        />
      </ScrollView>
    </View>
  );
}
