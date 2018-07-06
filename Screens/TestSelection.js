import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class TestSelection extends Component {
   static navigationOptions = {
    title: 'Select Test',
  };
  render() {
    return (
      <View>
        <Text style={styles.headline}>SELECT A TEST BELOW : </Text>
          <Text>  </Text>
            <Text>  </Text>

      <Button onPress= {() => this.props.navigation.navigate ('TestSetup')}
        title="INSTI HIV & SYPHILLIS TEST"/>
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



  export default TestSelection;
