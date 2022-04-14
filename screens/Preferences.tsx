import { BackgroundImage, Header, Icon } from "@react-native-elements/base";
import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function; };
  };
  export default function Preferences(props: CompProps) {

    return (
      <ImageBackground source={require("../assets/images/splash_2.png")} resizeMode="cover" style={styles.image}>
            <View>
            <Header
                // Header with menu icon and title
                containerStyle={[styles.header]}
                backgroundColor="#FFF"
                barStyle="default"
                centerComponent={{
                    text: "Preferences",
                    style: { color: "#000", fontSize: 36, fontWeight: "700" }
                }}
                centerContainerStyle={{}}
                leftComponent={<Icon name="menu" color="#000" size={44} onPress={() => props.navigation.navigate('Menu')}></Icon>}
                leftContainerStyle={{}}
                placement="left"
                rightComponent={{}}
                rightContainerStyle={{}}
                statusBarProps={{}}
            ></Header>
            </View>
      </ImageBackground>
    )};
    const styles = StyleSheet.create({
      image: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: "center"
    },
    header: {
      borderColor: '#000',
      position:'absolute',
      top:-410, 
  },
    });