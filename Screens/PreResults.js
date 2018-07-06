import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class PreResults extends Component {
   static navigationOptions = {
    title: 'INFO',
  };
  render() {


    return (
      <View>



    <Text style={styles.headline}>The next page will display your ISTI HIV & Syphillis    </Text>
    <Text style={styles.headline}>                                        test result.  </Text>
    <Text></Text>
    <Text></Text>



      <Button onPress= {() => this.props.navigation.navigate ('ResultsPage')}
        title="Get Results"/>
      <Text></Text>
      <Text></Text>

         <Button onPress= {() => this.props.navigation.navigate ('PreResults')}
            title="Dial Hotline"/>
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


  export default PreResults;
