import React, { Component } from 'react';
import { StyleSheet ,Text, View, ImageBackground,Button,Image} from 'react-native';





 class HomeScreen extends Component {
   static navigationOptions = {
    title: 'Welcome',
  };
  render() {

    return(
      <ImageBackground
      source={require('../Images/grey.jpg')}
        style={styles.container}>



              <Text style={styles.headline}>                       Welcome to SmartTest! </Text>
              <Text style={styles.headline}>        SmartTest is a companion app to rapid HIV </Text>
              <Text style={styles.headline}>                           and syphillis tests. </Text>
                  <Text>  </Text>
              <Text style={styles.headline}>        SmartTest will walk you through the testing </Text>
              <Text style={styles.headline}>            process, interpret your result and provide  </Text>
              <Text style={styles.headline}>                      resources for the next steps. </Text>
              <Text>  </Text>
                <Text>  </Text>
                  <Text>  </Text>                                       // TestSelection
              <Button onPress= {() => this.props.navigation.navigate ('tabTest')}
                title="Get Started"/>





              </ImageBackground>
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



  export default HomeScreen;
