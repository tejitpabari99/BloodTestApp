import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video,ScrollView} from 'react-native';





 class Instructions7 extends Component {
   static navigationOptions = {
    title: 'Extract Blood',
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.headline}>                Place tip of lancet on the clean finger.   </Text>
          <Text style={styles.headline}>                 Firmly push down on the other end.   </Text>
          <Text></Text>
            <Text></Text>

          <Image source={       require('../Images/8A.png')}   style={{width: 420, height: 250}} />
        <Text>                       </Text>
          <Text>                       </Text>
          <Text style={styles.headline}>                  You will feel a momentary pinprick.  </Text>
          <Text style={styles.headline}>                       After discard lancet in trash   </Text>

        <Text style={styles.headline}>                                   completely.</Text>
        <Text></Text>
          <Image source={       require('../Images/8B.png')}   style={{width: 420, height: 250}} />

<Text></Text>


      <Button onPress= {() => this.props.navigation.navigate ('Instructions8')}
        title="Next"/>
</ScrollView>
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



  export default Instructions7;
