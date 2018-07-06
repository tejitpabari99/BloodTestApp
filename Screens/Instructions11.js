import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions11 extends Component {
   static navigationOptions = {
    title: 'Running the Test (1)',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>               Pick up solution tube #2 and mix the      </Text>
          <Text style={styles.headline}>               contents by inverting several times.</Text>
            <Text>                         </Text>
              <Text>                          </Text>
                <Image source={       require('../Images/12A.jpg')}   style={{width: 420, height: 250}} />

                <Text style={styles.headline}>                 Remove the cap and pour contents           </Text>
                <Text style={styles.headline}>                       into the center of the test.   </Text>
                  <Text>                          </Text>
                    <Image source={       require('../Images/12B.png')}   style={{width: 420, height: 250}} />







      <Button onPress= {() => this.props.navigation.navigate ('Instructions12')}
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


  export default Instructions11;
