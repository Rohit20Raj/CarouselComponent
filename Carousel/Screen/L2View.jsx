import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Pressable,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
  AppState,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video, {VideoRef} from 'react-native-video';
import {DATA} from '../VideoData/data';
import {SpeakerXMarkIcon, XMarkIcon} from 'react-native-heroicons/outline';
import PipHandler, {usePipModeListener} from 'react-native-pip-android';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function L2View() {
  const videoRef = useRef < VideoRef > null;
  const navigation = useNavigation();
  const route = useRoute();
  const {index, id, url, poster} = route.params;
  const [currentIndex, setCurrentIndex] = useState(index);
  const [mute, setMute] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [appState, setAppState] = useState(AppState.currentState);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    if (appState === 'active') {
      setPaused(false);
    }
  }, [appState]);

  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      setPaused(false);
    } else {
      setPaused(true);
    }
    setAppState(nextAppState);
  };

  const inPipMode = usePipModeListener();

  const handleSeek = () => {
    console.log('triggered!');
    if (this.player) {
      console.log('player found!');
      console.log(this.player);
      this.player.seek(5, 100);
    }
  };

  useEffect(() => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  }, [index]);

  if (inPipMode) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Video
          source={{
            uri: DATA[currentIndex].url,
          }}
          poster={DATA[currentIndex].thumbnail}
          muted={true}
          paused={false}
          repeat={true}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        />
      </SafeAreaView>
    );
  }

  handleProgress = progressData => {
    setCurrentProgress(progressData.currentTime);
  };

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
                    ref={videoRef}
                    source={{uri: item.url}}
                    volume={1}
                    pictureInPicture={true}
                   onPictureInPictureStatusChanged={() => {
                       console.log("PIP CHANGED");
                   }}
                    playInBackground={true} // Audio continues to play when app entering background.
                    // controls={true}
                    poster={item.thumbnail}
                    muted={mute}
                    repeat={true}
                    paused={paused || (currentIndex === index ? false : true)}
                    resizeMode="cover"
                    posterResizeMode="cover"
                    onProgress={this.handleProgress}
                    style={{
                      height: windowHeight,
                      width: windowWidth,
                    }}
                    onBuffer={this.onBuffer} // Callback when remote video is buffering
                    onError={this.videoError} // Callback when video cannot be loaded
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: windowHeight / 4,
                      left: windowWidth / 2,
                    }}>
                    {mute && (
                      <SpeakerXMarkIcon color="black" fill="white" size={50} />
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <View
                style={{position: 'absolute', top: 40, right: 10, zIndex: 10}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <XMarkIcon color="white" size={42} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // handleSeek()
                    {
                      Platform.OS === 'android' &&
                        PipHandler.enterPipMode(95, 160);
                    }
                  }}>
                  <Image
                    style={{
                      height: 50,
                    }}
                    source={{
                      uri: 'https://cdn-img-dev.live2.ai/sdk_assets/PIP.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          // maxToRenderPerBatch={2}
          onMomentumScrollEnd={({index}) => {
            setCurrentIndex(index);
          }}
        />
      </ScrollView>
    </View>
  );
}
