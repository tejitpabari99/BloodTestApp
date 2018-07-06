import React, { Component } from 'react';
import { WebView, Linking } from 'react-native';

class HIVSyphillisInfo extends Component {
  render() {
    const uri = 'https://www.cdc.gov/std/syphilis/stdfact-msm-syphilis.htm';
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}

export default HIVSyphillisInfo;


/*import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class HIVSyphillisInfo extends Component {
   static navigationOptions = {
    title: 'HIV and Syphillis info',
  };
  render() {
    return (
      <View>
        <Text>                 Click on the links to learn more about HIV </Text>
        <Text>                                     and syphillis.                              </Text>
        <Text>                                                     </Text>
        <Button onPress= {() => this.props.navigation.navigate ('HIVinfo')}
           title="HIV information"/>
        <Button onPress= {() => this.props.navigation.navigate ('Syphillisinfo')}
           title="Syphillis information"/>
        <Button onPress= {() => this.props.navigation.navigate ('GuestResources')}
           title="Back"/>
</View>
          );
        }
      }

  export default HIVSyphillisInfo;
  */
