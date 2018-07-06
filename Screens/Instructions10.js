import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video,ScrollView} from 'react-native';





 class Instructions10 extends Component {
   static navigationOptions = {
    title: 'Simple Transfer',
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.headline}>                    Recap solution tube #1 and mix    </Text>
         <Text style={styles.headline}>                 contents by inverting several times.</Text>
            <Text>                         </Text>
              <Text>                          </Text>
                <Image source={       require('../Images/11A.png')}   style={{width: 420, height: 250}} />
                <Text>                         </Text>
                  <Text>                          </Text>
                <Text style={styles.headline}>                pour the contents to the center              </Text>
                <Text style={styles.headline}>                       of the  test membrane.   </Text>
                  <Text>                          </Text>
                    <Image source={       require('../Images/11B.png')}   style={{width: 420, height: 250}} />

                    <Text>                         </Text>
                      <Text>                          </Text>





      <Button onPress= {() => this.props.navigation.navigate ('Instructions11')}
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



  export default Instructions10;
