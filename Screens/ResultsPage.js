import React, { Component } from 'react';
import { StyleSheet ,Text, View,Button,Image} from 'react-native';





 class ResultsPage extends Component {
   static navigationOptions = {
    title: 'RESULTS',
  };
  render() {


    return (
      <View>



    <Text> </Text>
    <Text> </Text>

    <Text> </Text>

    <Text> </Text>

    <Text> </Text>





      <Button onPress= {() => this.props.navigation.navigate ('ResultShare')}
        title="SAVE"/>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('DeletePage')}
        title="DELETE"/>
      <Text></Text>
      <Text></Text>
      <Button onPress= {() => this.props.navigation.navigate ('GuestResources')}
        title="RESOURCES"/>
        <Text></Text>
        <Text></Text>
         <Button onPress= {() => this.props.navigation.navigate ('ResultsPage')}
            title="DIAL HOTLINE"/>

              <Text></Text>
                <Text></Text>
                <Text></Text>
                  <Text></Text>
                  <Text></Text>
                    <Text></Text>
                    <Text></Text>
                      <Text></Text>
                      <Text></Text>
                        <Text></Text>
                          <Text></Text>
                          <Text></Text>
                            <Text></Text>
                              <Text></Text>
                              <Text></Text>
                              <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>

                  <Text style={{fontWeight: 'bold',fontSize:12}}>                   Any positive results should be confirmed by a </Text>
                  <Text style={{fontWeight: 'bold',fontSize:12}}>                                         healthcare provider.</Text>
                  <Text></Text>

                    <Text style={{fontWeight: 'bold',fontSize:12}}>             Negative results may not detect a recent infection. For</Text>
                     <Text style={{fontWeight: 'bold',fontSize:12}}>                   for more information, click on the resources tab.</Text>

</View>
          );
        }
      }

  export default ResultsPage;
