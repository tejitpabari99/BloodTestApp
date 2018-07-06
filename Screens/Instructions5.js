import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions5 extends Component {
   static navigationOptions = {
    title: 'Sterilize Finger',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>                        Choose a finger to prick    </Text>
        <Text style={styles.headline}> We recommend one on your non-dominant hand </Text>
        <Text></Text>
        <Text></Text>

          <Image source={       require('../Images/8B.png')}   style={{width: 420, height: 250}} />
          <Text></Text>

          <Text></Text>

        <Text style={styles.headline}>      Massage your finger to stimulate blood flow </Text>
            <Text>                                              </Text>
            <Text></Text>



      <Button onPress= {() => this.props.navigation.navigate ('Instructions6')}
        title="Next"/>
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


  export default Instructions5;
