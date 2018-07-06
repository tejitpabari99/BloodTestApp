import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class TestAccuracy extends Component {
   static navigationOptions = {
    title: 'Test Accuracy',
  };
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                     The INSTI Multiplex is extremely </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                   accurate when performed correctly                                 </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                                                    </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>               It has been shown to have a sensitivity of                                </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                 99.6% and a specificity of 99.3% for the </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                detection of HIV and HIV-2 antibodies in                         </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                    finger stick examples, and a 100%                </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>              sensitivity and specificity for the detection    </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                              of Secondary syphillis  </Text>
        <Button onPress= {() => this.props.navigation.navigate ('GuestResources')}
           title="Back"/>
</View>
          );
        }
      }

  export default TestAccuracy;
