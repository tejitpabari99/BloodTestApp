import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video,ScrollView} from 'react-native';





 class Instructions12 extends Component {
   static navigationOptions = {
    title: 'Running the Test (2)',
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.headline}>               Pick up solution tube #3 and mix      </Text>
        <Text>                         </Text>
          <Text>                          </Text>
          <Image source={       require('../Images/13A.jpg')}   style={{width: 420, height: 250}} />


          <Text style={styles.headline}>                Remove the cap and pour on to</Text>
            <Text style={styles.headline}>               the center of the test membrane. </Text>
              <Text>                          </Text>
                <Text>                          </Text>


                <Text style={styles.headline}>               Remove the cap and pour contents           </Text>
                <Text style={styles.headline}>                      into the center of the test.   </Text>
                  <Text>                          </Text>
                    <Image source={       require('../Images/13B.png')}   style={{width: 420, height: 250}} />



<Text>                          </Text>



      <Button onPress= {() => this.props.navigation.navigate ('ScanResults')}
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


  export default Instructions12;
