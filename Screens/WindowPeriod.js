import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class WindowPeriod extends Component {
   static navigationOptions = {
    title: 'Window Period',
  };
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                      You may test positive with the INSTI </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                     Multiplex in as little as 21-22 days after                                 </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                 infection; however, it can take as long as 3                               </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>       months after infection toi produce a positive result.    </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                    99.6% and a specificity of 99.3% for the  </Text>
<Text style={{fontWeight: 'bold',fontSize:15}}>                      detection of HIV-1 and HIV-2 antibodies in  </Text>
<Text> </Text>
<Text> </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                 The average incubation period for syphillis                                    </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                     is 3 to 6 weeks, and 25 days to 2 months                             </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                         for HIV. If you get tested before this time          </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                    has elapsed, it is recommended that you                                    </Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>            test again to confirm your results once the</Text>
        <Text style={{fontWeight: 'bold',fontSize:15}}>                         incubation period has passed</Text>
        <Button onPress= {() => this.props.navigation.navigate ('GuestResources')}
           title="Back"/>
</View>
          );
        }
      }

  export default WindowPeriod;
