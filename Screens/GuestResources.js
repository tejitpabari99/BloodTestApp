import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class GuestResources extends Component {
   static navigationOptions = {
    title: 'Resources',
  };
  render() {


    return (
      <View>

<Button onPress= {() => this.props.navigation.navigate ('TestAccuracy')}
        title="Test Accuracy"/>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('WindowPeriod')}
        title="Window Period"/>
      <Text></Text>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('HIVSyphillisInfo')}
        title="Syphillis Information"/>
        <Text></Text>
        <Text></Text>
        <Button onPress= {() => this.props.navigation.navigate ('HIVinfo')}
          title=" HIV Information"/>
          <Text></Text>
          <Text></Text>
         <Button onPress= {() => this.props.navigation.navigate ('Clinics')}
            title="Nearby Clinics"/>



</View>
          );
        }
      }

  export default GuestResources;
