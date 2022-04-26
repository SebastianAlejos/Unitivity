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
import Events from './screens/Events';
import TestPanel from './screens/TestPanel';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import Event_Details from './screens/Event_Details';
import CreateEventPage1 from './screens/CreateEventPage1';
import Calendars from './screens/Calendar';
import CreateEventPage2 from './screens/CreateEventPage2';
import Preferences from './screens/Preferences';
import CreateCollegeAccount from './screens/CreateCollegeAccount';
import CreditCard from './screens/CreditCard';
import CheckOut from './screens/CheckOut';
import CreateEvent_1 from './screens/CreateEvent_1';

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
        <Stack.Screen name='Events' component={Events}/>
        {props => (
                <Events {...props}/>
              )}
        <Stack.Screen name='TestPanel' component={TestPanel}/>
        {props => (
                <TestPanel {...props}/>
              )}
        <Stack.Screen name='Favorites' component={Favorites}/>
        {props => (
                <Favorites {...props}/>
              )}
        <Stack.Screen name='Profile' component={Profile}/>
        {props => (
                <Profile {...props}/>
              )}
        <Stack.Screen name='Event_Details' component={Event_Details}/>
        {props => (
                <Event_Details {...props}/>
              )}
        <Stack.Screen name='CreateEventPage1' component={CreateEventPage1}/>
        {props => (
                <Event_Details {...props}/>
              )}
        <Stack.Screen name='Calendars' component={Calendars}/>
        {props => (
                <Calendars {...props}/>
              )}
        <Stack.Screen name='CreateEventPage2' component={CreateEventPage2}/>
        {props => (
                <Event_Details {...props}/>
              )}
        <Stack.Screen name='Preferences' component={Preferences}/>
        {props => (
                <Preferences {...props}/>
              )}     
        <Stack.Screen name='CreateCollegeAccount' component={CreateCollegeAccount}/>
        {props => (
                <CreateCollegeAccount {...props}/>
              )}   
        <Stack.Screen name='CreditCard' component={CreditCard}/>
        {props => (
                <CreditCard {...props}/>
              )} 
        <Stack.Screen name='CheckOut' component={CheckOut}/>
        {props => (
                <CheckOut {...props}/>
              )}   
        <Stack.Screen name='CreateEvent_1' component={CreateEvent_1}/>
        {props => (
                <CreateEvent_1 {...props}/>
              )}      
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}