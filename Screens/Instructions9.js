import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions9 extends Component {
   static navigationOptions = {
    title: 'Bandaging Finger',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>                   Wipe your finger with the gauze    </Text>
          <Text style={styles.headline}>                          and put on a bandage.</Text>
            <Text>                         </Text>
              <Text>                          </Text>

          <Image source={       require('../Images/10.png')}   style={{width: 420, height: 250}} />





      <Button onPress= {() => this.props.navigation.navigate ('Instructions10')}
        title="Next"/>
        <Text>                           </Text>
          <Text>                       </Text>
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



  export default Instructions9;
