import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,video,ScrollView} from 'react-native';





 class Instructions3 extends Component {
   static navigationOptions = {
    title: 'Prepare Test',
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.headline}>             Pick up the test pouch and tear it open. </Text>
        <Text style={styles.headline}>                    Place the test on a flat surface      </Text>

            <Text></Text>
            <Text></Text>
          <Image source={       require('../Images/4A.png')}   style={{width: 420, height: 250}} />
                            <Text style={styles.headline}>                    Open Gauze packet and place </Text>
                              <Text style={styles.headline}>                         it nearby for future uses</Text>
                              <Text></Text>
                              <Text></Text>
                              <Text></Text>

                                <Image source={       require('../Images/4B.jpg')}   style={{width: 420, height: 250}} />
                                <Text style={styles.headline}>                Make sure to orient the test so the lip </Text>
                                <Text style={styles.headline}>                                 faces towards you</Text>
                                <Text></Text>
                                <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('Instructions4')}
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


  export default Instructions3;
