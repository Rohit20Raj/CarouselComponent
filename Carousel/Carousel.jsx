import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import {DATA} from './VideoData/data';


export const Carousel = () => {
  // const data = route.params;
  // console.log(data);
  const [videoData, setVideoData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setVideoData(DATA);
  }, [DATA]);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <FlatList
      data={videoData}
      renderItem={({item, index}) => (
        <VideoPlayer
          id={item.id}
          data={videoData}
          url={item.url}
          poster={item.thumbnail}
          paused={index !== activeIndex}
          index={index}
        />
      )}
      viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
      onViewableItemsChanged={onViewableItemsChanged}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        marginHorizontal: 10,
        marginVertical: 20,
      }}
    />
  );
};
