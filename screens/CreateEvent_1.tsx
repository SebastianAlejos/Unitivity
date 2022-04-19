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

  // Button Group 1 (public/private)
  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(1);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);

  // Button Group 2 (AM/PM)
  const [
    selectedIndex1,
    setSelectedIndex1
  ] = React.useState(1);
  const [
    selectedIndexes1,
    setSelectedIndexes1
  ] = React.useState([]);

  // Button Group 2 (AM/PM)
  const [
    selectedIndex2,
    setSelectedIndex2
  ] = React.useState(1);
  const [
    selectedIndexes2,
    setSelectedIndexes2
  ] = React.useState([]);

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

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            containerStyle={{ flex: 4, marginVertical: 10 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10
            }}
            rightIcon={<Icon name="close" size={20} />}
            label="TITLE"
            placeholder="Enter Title"
          />

          <ButtonGroup
            buttonStyle={{
              backgroundColor: "#CCC6C6",
              borderRadius: 10
            }}
            buttonContainerStyle={{}}
            buttons={["Private", "Public"]}
            containerStyle={{
              borderRadius: 10,
              flex: 2,
              height: '60%',
              marginTop: '10%',
              backgroundColor: '#CCC6C6'
            }}
            onPress={selectedIdx =>
              setSelectedIndex(selectedIdx)
            }
            selectedButtonStyle={{ backgroundColor: "#FFF", borderWidth: 2, borderColor: '#CCC6C6' }}
            selectedIndex={selectedIndex}
            selectedIndexes={selectedIndexes}
            selectedTextStyle={{
              color: "#444",
              fontWeight: "400"
            }}
            textStyle={{ color: "#444", fontWeight: "400" }}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            containerStyle={{ flex: 5, marginVertical: 10 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10
            }}
            rightIcon={<Icon name="close" size={20} />}
            label="LOCATION"
            placeholder="Enter Address"
          />

          <Button
            buttonStyle={{
              backgroundColor: "#018786"
            }}
            containerStyle={{ marginRight: 10, marginTop: '10%', borderRadius: 10, height: 50, width: 50 }}
            icon={<Icon name="earth" size={35} color="#FFF" />}
            iconContainerStyle={{ backgroundColor: "#000" }}
            onPress={() => alert("find location")}
            titleProps={{}}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            containerStyle={{ marginVertical: 10, flex: 5 }}
            inputContainerStyle={{
              backgroundColor: "#FFF",
              paddingHorizontal: 10,
              marginVertical: 10
            }}
            rightIcon={<Icon name="close" size={20} />}
            label="DATE"
            placeholder="Select Date"
          />

          <Button
            buttonStyle={{
              backgroundColor: "#018786"
            }}
            containerStyle={{ marginRight: 10, marginTop: '10%', borderRadius: 10, height: 50, width: 50 }}
            icon={<Icon name="calendar" size={35} color="#FFF" />}
            iconContainerStyle={{ backgroundColor: "#000" }}
            onPress={() => alert("open calendar")}
            titleProps={{}}
          />
        </View>

        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Input
                  containerStyle={{ flex: 5, marginVertical: 10 }}
                  inputContainerStyle={{
                    backgroundColor: "#FFF",
                    paddingHorizontal: 10,
                    marginVertical: 10
                  }}
                  label="START"
                  placeholder="0:00"
                />
              </View>
              <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <ButtonGroup
                  buttonStyle={{
                    backgroundColor: "#CCC6C6",
                    borderRadius: 10
                  }}
                  buttonContainerStyle={{}}
                  buttons={["AM", "PM"]}
                  containerStyle={{
                    borderRadius: 10,
                    flex: 2,
                    marginTop: 38,
                    marginBottom: 10,
                    backgroundColor: '#CCC6C6'
                  }}
                  onPress={selectedIdx1 =>
                    setSelectedIndex(selectedIdx1)
                  }
                  selectedButtonStyle={{ backgroundColor: "#FFF", borderWidth: 2, borderColor: '#CCC6C6' }}
                  selectedIndex={selectedIndex1}
                  selectedIndexes={selectedIndexes1}
                  selectedTextStyle={{
                    color: "#444",
                    fontWeight: "400"
                  }}
                  textStyle={{ color: "#444", fontWeight: "400" }}
                />
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Input
                  containerStyle={{ flex: 5, marginVertical: 10 }}
                  inputContainerStyle={{
                    backgroundColor: "#FFF",
                    paddingHorizontal: 10,
                    marginVertical: 10
                  }}
                  label="END"
                  placeholder="0:00"
                />
              </View>
              <View style={{ flex: 1, backgroundColor: 'yellow' }}>

              </View>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 1, backgroundColor: 'orange' }}>

            </View>
            <View style={{ flex: 2, backgroundColor: 'pink' }}>

            </View>
            <View style={{ flex: 2, backgroundColor: 'teal' }}>

            </View>
            <View style={{ flex: 2, backgroundColor: 'purple' }}>

            </View>
          </View>
        </View>

        <View style={{ flex: 2 }} />
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
  }
});