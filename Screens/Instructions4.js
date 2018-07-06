import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video} from 'react-native';





 class Instructions4 extends Component {
   static navigationOptions = {
    title: 'Prepare Sample Collector',
  };
  render() {
    return (
      <View>

        <Text style={styles.headline}>                  Pick up the solution tube #1 with   </Text>
        <Text style={styles.headline}>               The red cap and twist open the cap </Text>
        <Text></Text>
            <Text></Text>

                <Text></Text>
          <Image source={       require('../Images/redVile.jpg')}   style={{width: 420, height: 250}} />
          <Text></Text>
        <Text style={styles.headline}>                    Place it nearby for future steps</Text>
            <Text style={styles.headline}>                    Be carefull to not knock it over! </Text>
            <Text></Text>
                <Text></Text>
                    <Text>               </Text>



      <Button onPress= {() => this.props.navigation.navigate ('Instructions5')}
        title="Next"/>
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


  export default Instructions4;
