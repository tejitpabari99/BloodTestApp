import React, { Component } from "react";
import {Text} from "react-native";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';
import { TitleText, Box, GreenRoundButton, CenterTextBox, Picture } from "./Styles";


class VideoInfo extends Component {
  static navigationOptions = {
    title: "Video Info"
  };

  render() {
    return (
      <Box>
        <TitleText>Video Info</TitleText>

        <CenterTextBox />
        <CenterTextBox>First you will see a short instructional video that provides an overview of the test.</CenterTextBox>
        <CenterTextBox />
        <CenterTextBox>Then you will see step-by-step instructions to run the test yourself.</CenterTextBox>
        <CenterTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("VideoPlayer2")} >
          Next
        </GreenRoundButton>

        <FooterTab>
              <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                    <Text>New Test</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("Resources")}>
                                    <Text>Resources</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("SavedResults")}>
                                    <Text>Results</Text>
                                    </Button>

        </FooterTab>

      </Box>
    );
  }
}

export { VideoInfo };
