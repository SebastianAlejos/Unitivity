import {Header, Icon, Switch, Divider} from "@react-native-elements/base";
import React from "react";
import { ImageBackground, View, StyleSheet, Text} from "react-native";

type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function; };
  };
  export default function Preferences(props: CompProps) {
    const [value, setValue] = React.useState(true);
    return (
      <ImageBackground source={require("../assets/images/splash_2.png")} resizeMode="cover" style={styles.image}>
        < Header
                  // Header with menu icon and title
                  containerStyle={[styles.header]}
                  backgroundColor="#FFF"
                  barStyle="default"
                  centerComponent={{
                    text: "Events",
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
            <View style={[styles.container]}>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Change Name</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Change Email</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Change Password</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#FFFF"
                  insetType="left"
                  width={50}
                  orientation="horizontal"
                />
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Dark Mode                                              <Switch
                  style={[styles.switch]}
                  color="#03DAC6"
                  value={ value}
                  onValueChange={() => setValue(!value)}
                /></Text> 
                
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Change Default Map App</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Location Services</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Notification Settings </Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#FFFF"
                  insetType="left"
                  width={50}
                  orientation="horizontal"
                />
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Change Current College</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
                <Text style={[styles.title]}>Purchase College Account</Text>
                <Divider
                  style={{ width: "100%", margin: 0 }}
                  color="#EAEAEA"
                  insetType="left"
                  width={1}
                  orientation="horizontal"
                />
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
        position:'relative',
      },
      title: {
        fontSize: 20,
        fontWeight: "400",
        backgroundColor: "#F8F8F8",
        padding:2, 
      },
      subtitle: {
        fontSize: 15,
        color: 'gray',
        alignContent:'center'
      },
      special_sub: {
        fontSize: 15,
        color: '#03DAC6',
        fontWeight: "600"
      },
      events: {
        paddingTop: 20,
        height: '100%',
        width: '100%',
        borderRadius: 25,
      },
      container: {
        flex: 1,
        paddingTop:0,
        alignItems:'stretch',
        justifyContent: 'flex-start',
        height:300,
      },
      switch:{
        marginBottom:0
      }
});