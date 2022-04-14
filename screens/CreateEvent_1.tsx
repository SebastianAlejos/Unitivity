import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { Header, Button, ButtonGroup, SearchBar, ListItem, Icon, Input } from "@react-native-elements/base";

type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function };
};

export default function CreateEvent_1(props: CompProps) {
  return (
    <>
      <Header
        // Header with menu icon and title
        containerStyle={[styles.header]}
        backgroundColor="#FFF"
        barStyle="default"
        centerComponent={{
          text: "Create Event",
          style: { color: "#000", fontSize: 36, fontWeight: "700" }
        }}
        leftComponent={<Icon name="close" color="#000" size={44} onPress={() => props.navigation.goBack()}></Icon>}
        placement="left"
      ></Header>

      <View style={[styles.main_container]}>
        <View style={[styles.progress_container]}>
          <View style={[styles.progress_circle_1]}><Text style={[styles.progress_text_1]}>1</Text></View>
          <View style={[styles.progress_line]} />
          <View style={[styles.progress_circle_2]}><Text style={[styles.progress_text_2]}>2</Text></View>
        </View>

        <Input
          containerStyle={{ flex: 1, marginVertical: 10 }}
          inputContainerStyle={{
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            marginVertical: 10
          }}
          rightIcon={<Icon name="close" size={20} />}
          label="TITLE"
          placeholder="Enter Title"
        />

        <Input
          containerStyle={{ flex: 1, marginVertical: 10 }}
          inputContainerStyle={{
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            marginVertical: 10
          }}
          rightIcon={<Icon name="close" size={20} />}
          label="LOCATION"
          placeholder="Enter Title"
        />

        <Input
          containerStyle={{ flex: 1, marginVertical: 10 }}
          inputContainerStyle={{
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            marginVertical: 10
          }}
          rightIcon={<Icon name="close" size={20} />}
          label="DATE"
          placeholder="Enter Title"
        />

        <View style={{ flex: 4 }} />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  main_container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  progress_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D1D1D1',
    borderBottomWidth: 0.5,
    padding: 5
  },
  progress_circle_1: {
    backgroundColor: '#018786',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress_circle_2: {
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#018786',
    borderWidth: 2
  },
  progress_line: {
    width: 30,
    borderColor: '#018786',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  progress_text_1: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF'
  },
  progress_text_2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#018786'
  }
});