import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image, ScrollView} from 'react-native';





 class GuestInstructions extends Component {
   static navigationOptions = {
    title: 'Material List',
  };
  render() {
    return (

            <ScrollView>

                                                  <Text style={{ fontSize: 20,fontWeight: 'bold'}}>                               INSTI MULTIPLEX </Text>
                                                  <Text></Text>

                                                  <Text style={{ fontSize: 16,fontWeight: 'bold'}}>                                        KIT MATERIALS           </Text>

                                                  <Text></Text>
                                                  <Text></Text>
                                                <Image source={       require('../Images/membraneUnit.jpg')}   style={{width: 420, height: 250}} />
                                                                  <Text style={styles.headline}>                            Membrane Unit</Text>
                                                                    <Text></Text>
                                                                    <Text></Text>
                                                                      <Image source={require('../Images/5.jpg')}   style={{width: 420, height: 250}} />
                                                                      <Text style={styles.headline}>                           Solution 1 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/12A.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                          Solution 2 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/13A.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                          Solution 3 Vial</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/lancet.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                           Single use Lancet</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/alcohol.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                            Alcohol Swab</Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/7A.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                            Gauze Pad </Text>
                                                                        <Text></Text>
                                                                          <Text></Text>
                                                                        <Image source={require('../Images/bandage.jpg')}   style={{width: 420, height: 250}} />
                                                                        <Text style={styles.headline}>                               Bandage </Text>

                      <Button onPress= {() => this.props.navigation.navigate ('GuestInstructions2')}
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

  export default GuestInstructions;




  /*
  <Image source={       require('../Images/membraneUnit.jpg')}   style={{width: 350, height: 200}} />
                    <Text>                            Membrane Unit</Text>
                      <Text></Text>
                      <Text></Text>
                        <Image source={require('../Images/5.jpg')}   style={{width: 350, height: 200}} />
                        <Text>                           Solution 1 Vial</Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/12A.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                          Solution 2 Vial</Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/13A.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                          Solution 3 Vial</Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/lancet.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                           Single use Lancet</Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/alcohol.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                            Alcohol Swab</Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/7A.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                            Gauze Pad </Text>
                          <Text></Text>
                            <Text></Text>
                          <Image source={require('../Images/bandage.jpg')}   style={{width: 350, height: 200}} />
                          <Text>                               Bandage </Text>
*/
