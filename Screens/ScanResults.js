
import React, { Component } from 'react';
import { Text, View, TouchableOpacity ,Button} from 'react-native';
import { Camera, Permissions } from 'expo';

 class ScanResults extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Button onPress= {() => this.props.navigation.navigate ('ScanResults2')}
                       title="Next"/>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>


              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
export default ScanResults


/*import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';

class ScanResults extends Component {
   static navigationOptions = {
    title: 'Scan Results',
  };
  render() {
    return (
      <View>
        <Text>                    Please align the edges of the test to       </Text>
        <Text>                      the center of the square below:           </Text>
        <Text>                                                                </Text>
        <Text>                    _________________________________           </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>
        <Text>                    |                                                  |         </Text>

        <Text>                    __________________________________          </Text>
        <Text>                                                                </Text>
        <Text>                                                                </Text>
        <Button onPress= {() => this.props.navigation.navigate ('ScanResults')}
          title="Retake"/>

  <Button onPress= {() => this.props.navigation.navigate ('PreResults')}
    title="Continue"/>
</View>



          );
        }
      }

  export default ScanResults;
  */
