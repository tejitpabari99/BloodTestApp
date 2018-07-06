import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';







class VideoInfo extends Component {
   static navigationOptions = {
    title: 'Video Info',
  };

  render() {

    return(


          <View>
          <Text style={styles.headline}>       First you will see a short instructional video </Text>
          <Text style={styles.headline}>                that provides an overview of the test.  </Text>
          <Text></Text>
<Text></Text>
          <Text style={styles.headline}>        Then you will see step-by-step instructions </Text>
          <Text style={styles.headline}>                          to run the test yourself.       </Text>
            <Text></Text>
              <Text></Text>

                                                                // VideoPlaceHolder
          <Button onPress= {() => this.props.navigation.navigate ('VideoPlaceHolder')}
            title="NEXT"/>

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>





          </View>
        );
      }
    }





    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      headline: {
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
   },
    });

export default VideoInfo;
