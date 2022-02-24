import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Alert, Button, ImageBackground, StyleSheet, Text, View } from "react-native";



const image = { uri: "../assets/images/splash_1.png" };

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ImageBackground source={require("../assets/images/splash_1.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>This is the login screen</Text>
        <Text style={styles.text}>Hi Reid</Text>
        <Button title="Login" onPress={() => Alert.alert('You signed in')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#6200EE'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: "center"
  },
});
