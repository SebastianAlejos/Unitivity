import { StyleSheet} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePassword from './screens/CreatePassword';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';
import CodeScreen from './screens/CodeScreen';
import Menu from './screens/Menu';
import Explore from './screens/Explore';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
          {props => (
                <Login {...props}/>
              )}
        <Stack.Screen name="CreatePassword" component={CreatePassword}/>
          {props => (
                <CreatePassword {...props}/>
              )}
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        {props => (
                <CreatePassword {...props}/>
              )}
        <Stack.Screen name="SignUp" component={SignUp}/>
        {props => (
                <CreatePassword {...props}/>
              )}
        <Stack.Screen name="CodeScreen" component={CodeScreen}/>
        {props => (
                <CodeScreen {...props}/>
              )}
        <Stack.Screen name='Menu' component={Menu}/>
        {props => (
                <Menu {...props}/>
              )}
        <Stack.Screen name='Explore' component={Explore}/>
        {props => (
                <Explore {...props}/>
              )}
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}