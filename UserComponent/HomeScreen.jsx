import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { CarouselComponent } from '../Carousel'
import { Carousel } from '../Carousel/Carousel'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <ScrollView style={{height: windowHeight, width: windowWidth}}>
      {/* <Text> Illum borum rum accusantium consectetur eveniet excepturi mollitia unde fugiat! Corporis, voluptatum isi. Aut exercitationem quibusdam, unde illum eveniet corrupti sequi veniam ab perspiciatis eaque sapiente iure debitis eius, maiores, quisquam eligendi quaerat at? Similique, molestiae. Expedita quo rerum eos inventore facilis nemo quam, aut ut consequatur esse eveniet quae.</Text> */}
      <Carousel/>
      {/* <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur soluta veniam sint! Illum repellendus odit laborum, voluptas ratione cupiditate repellat, iste ipsum eaque rerum nam maxime? Vitae sunt vel atque doloremque dolor accusamus perspiciatis, et temporibus quidem tempora quasi quod eveniet eligendi inventore odio itaque pariatur ullam officiis incidunt aliquid id neque porro aut. Nostrum ipsum hic asperiores totam ratione? Architecto, laborum expedita, quidem quaerat perspiciatis, numquam facilis nemo fugiat beatae aperiam rerum hic dolorem saepe suscipit? Quidem dolorum accusantium consectetur eveniet excepturi mollitia unde fugiat! Corporis, voluptatum iste a pariatur ducimus cumque labore consectetur atque voluptate obcaecati quas quaerat provident commodi magnam nobis similique rerum doloribus esse blanditiis fuga ex, laborum aut sed possimus? Et ullam non distinctio quasi officia pariatur recusandae molestias qui autem sequi vitae unde, exercitationem saepe omnis similique ducimus assumenda eaque repellendus? Quo nostrum hic voluptates a exercitationem eum porro atque placeat maiores saepe deleniti quisquam in, aperiam accusantium blanditiis, ea eaque assumenda suscipit minus explicabo fuga commodi. Aut exercitationem quibusdam, unde illum eveniet corrupti sequi veniam ab perspiciatis eaque sapiente iure debitis eius, maiores, quisquam eligendi quaerat at? Similique, molestiae. Expedita quo rerum eos inventore facilis nemo quam, aut ut consequatur esse eveniet quae.</Text> */}
    </ScrollView>
  )
}

export default HomeScreen