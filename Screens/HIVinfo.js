import React, { Component } from 'react';
import { WebView, Linking } from 'react-native';

class HIVinfo extends Component {
  render() {
    const uri = 'https://www.cdc.gov/hiv/basics/whatishiv.html';
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

export default HIVinfo;


/*import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class HIVinfo extends Component {
   static navigationOptions = {
    title: 'HIV and Syphillis info',
  };
  render() {
    return (
      <View>
        <Text>   Link to HIV Website </Text>

</View>
          );
        }
      }

  export default HIVinfo;
*/
