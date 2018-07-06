import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions6 extends Component {
   static navigationOptions = {
    title: 'Sterilize Finger',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>                          Pick up alcohol swab   </Text>
<Text>                       </Text>
          <Image source={       require('../Images/alcohol.jpg')}   style={{width: 420, height: 250}} />
        <Text>                       </Text>
          <Text style={styles.headline}>                          Wipe the tip of your finger  </Text>
          <Text style={styles.headline}>                         with the swab and let it dry   </Text>
            <Text style={styles.headline}>                                    completely.</Text>
          <Image source={       require('../Images/7B.png')}   style={{width: 420, height: 250}} />


<Text>                       </Text>

      <Button onPress= {() => this.props.navigation.navigate ('Instructions7')}
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




  export default Instructions6;
