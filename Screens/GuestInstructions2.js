import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class GuestInstructions2 extends Component {
   static navigationOptions = {
    title: 'Prepare Gauze',
  };
  render() {
    return (
      <View>
        <Text>                      </Text>
          <Text>  </Text>
            <Text>  </Text>
            <Text></Text>
            <Text></Text>
          <Image source={       require('../Images/2.png')}   style={{width: 420, height: 250}} />
          <Text>  </Text>
                            <Text style={styles.headline}>                       Open Gauze packet and place </Text>
                              <Text style={styles.headline}>                             it nearby for future uses</Text>
                              <Text></Text>

      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions3')}
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

  export default GuestInstructions2;
