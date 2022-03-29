import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
type CompProps = {
    /* The props passed by navigation are much more complex,
     *  but we are only using the navigate and goBack functions in this example
     */
    navigation: { navigate: Function; goBack: Function};
  };
  export default function Map(props: CompProps) {
    return(
        <View>
            <MapView style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}/>
        </View>
    )};
    const styles = StyleSheet.create({
        map: {
          ...StyleSheet.absoluteFillObject,
        },
  });