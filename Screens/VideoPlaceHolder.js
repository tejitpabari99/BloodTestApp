import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image,video} from 'react-native';

import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';





 class VideoPlaceHolder extends Component {
   static navigationOptions = {
    title: 'Video',
  };

  render() {

    return(
          <View>
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri: 'file:///Users/michaelokrah/Documents/SMARTest/InstiV2.mp4',
              },
            }}
            isPortrait={true}
            paused={true}
            playFromPositionMillis={0}

          />

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

                    





           <Button onPress= {() => this.props.navigation.navigate ('Instructions')}
            title="NEXT"/>




          </View>
        );
      }
    }



export default VideoPlaceHolder;
