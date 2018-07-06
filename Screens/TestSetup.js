import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image,Video} from 'react-native';





 class TestSetup extends Component {
   static navigationOptions = {
    title: 'Test Options',
  };
  render() {
    return (

            <View>


              <Text style={styles.headline}>                SELECT TESTING MODE BELOW:  </Text>

              <Text> </Text>
                <Text> </Text>
                      <Button onPress= {() => this.props.navigation.navigate ('VideoInfo')}
                        title="JUST ME "/>
                        <Text> </Text>
                          <Text> </Text>
                        <Button onPress= {() => this.props.navigation.navigate ('GuestTestSelection')}
                          title="JUST MY PARTNER "/>
                          <Text> </Text>
                            <Text> </Text>
                          <Button onPress= {() => this.props.navigation.navigate ('DuoTest')}
                            title="DUO TEST "/>
                              <Text> </Text>
                                <Text> </Text>
                                  <Text> </Text>
                                    <Text> </Text>
                                      <Text> </Text>
                                        <Text> </Text>
                                          <Text> </Text>
                                            <Text> </Text>
                                              <Text> </Text>
                                                <Text> </Text>
                                                  <Text> </Text>
                                                    <Text> </Text>
                                                      <Text> </Text>


                  <Text style={{fontWeight: 'bold',fontSize:15}}>                                            NOTE:    </Text>
                <Text style={styles.headline}>  Just my partner will lead to the guest account </Text>
                 <Text style={styles.headline}>        mode where results cannot be saved. </Text>
                <Text style={styles.headline}>                      </Text>
                <Text>  </Text>
                <Text style={styles.headline}>    Duo Test Mode will enable simultaneous  </Text>
                 <Text style={styles.headline}> testing (e.g you and your partner), however the </Text>
                    <Text style={styles.headline}>            Partners results  cannot be saved.           </Text>


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



  export default TestSetup;
