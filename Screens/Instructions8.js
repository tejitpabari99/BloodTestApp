import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions8 extends Component {
   static navigationOptions = {
    title: 'Collect Blood',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>               Squeeze your finger to extrract blood.   </Text>
          <Text style={styles.headline}>                          </Text>
            <Text>                         </Text>
              <Text style={styles.headline}>                Grab solution tube #1 and drop the       </Text>
              <Text style={styles.headline}>                   the blood directly into the tube. </Text>
                <Text>                       </Text>
          <Image source={       require('../Images/9.png')}   style={{width: 420, height: 250}} />
        <Text>                       </Text>
          <Text>                       </Text>
  <Text>                         </Text>
    <Text style={styles.headline}>                   Make sure you get a few drops of    </Text>
    <Text style={styles.headline}>                             Blood into the tube.                 </Text>
<Text>                         </Text>





      <Button onPress= {() => this.props.navigation.navigate ('Instructions9')}
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


  export default Instructions8;
