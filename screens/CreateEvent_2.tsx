import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { Header, Button, ButtonGroup, SearchBar, ListItem, Input } from "@react-native-elements/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        leftComponent={<Icon name="arrow-left-circle-outline" color="#000" size={44} onPress={() => props.navigation.goBack()}></Icon>}
        placement="left"
      ></Header>

      <View style={[styles.main_container]}>
        <View style={[styles.progress_container]}>
          <View style={[styles.progress_circle_1]}><Text style={[styles.progress_text_1]}>1</Text></View>
          <View style={[styles.progress_line]} />
          <View style={[styles.progress_circle_1]}><Text style={[styles.progress_text_1]}>2</Text></View>
        </View>

        <View style={{ flex: 4 }}>
          <Input
            containerStyle={{ flex: 4, marginVertical: 10 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10,
              height: 80
            }}
            rightIcon={<Pressable onPress={() => clear()}><Icon name="close" size={20} /></Pressable>}
            label="DESCRIPTION"
            placeholder="Enter Description"
            multiline
            textAlignVertical="top"
          />
          <Input
            containerStyle={{ flex: 4, marginVertical: 10 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10,
              height: 60
            }}
            rightIcon={<Icon name="close" size={20} />}
            label="WEBSITE"
            placeholder="Enter Website URL"
          />
          <Input
            containerStyle={{ flex: 4, marginVertical: 10 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10,
              height: 60
            }}
            rightIcon={<Icon name="close" size={20} />}
            label="TAGS"
            placeholder="Search for tags..."
            leftIcon={
              <Icon name="magnify" size={20} />
            }
          />
          <Text style={[styles.subtitle_text]}>UPLOAD IMAGES</Text>
          <Button
            buttonStyle={{
              width: 70,
              height: 70,
              backgroundColor: "#6200EE"
            }}
            containerStyle={{
              borderRadius: 35,
              width: 70,
              height: 70,
              margin: 10
            }}
            disabledTitleStyle={{ color: "#6200EE" }}
            linearGradientProps={null}
            icon={<Icon name="plus" size={45} color="#FFF" />}
            onPress={() => { alert('Upload image') }}
          />

        </View>

        <View style={{ flex: 2, backgroundColor: '#FFF', borderTopWidth: 0.5, borderColor: '#CCC', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="SUBMIT"
            buttonStyle={{
              backgroundColor: '#6200EE',
              borderRadius: 30
            }}
            containerStyle={{
              width: 200,
              margin: 5
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
            onPress={() => props.navigation.navigate('Calendars')}
          />
          <Button
            title="CANCEL"
            buttonStyle={{
              backgroundColor: '#FFF',
              borderRadius: 30,
              borderColor: '#B00020',
              borderWidth: 1
            }}
            containerStyle={{
              width: 200,
              margin: 5
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 16, color: '#B00020' }}
            onPress={() => props.navigation.navigate('Calendars')}
          />

        </View>
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
    flex: 0.7,
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
  },
  title_text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#888',
    marginBottom: '5%',
    marginLeft: '6%'
  },
  subtitle_text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#888',
    marginLeft: 10
  }
});