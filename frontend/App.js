import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Calendar from './components/Calendar'


const Drawer = createDrawerNavigator()

export default function App() {


  return  (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="All Calendars" component={Calendar} />
        <Drawer.Screen name="Appointments" component={Calendar} />
        <Drawer.Screen name="Assignments" component={Calendar} />
        <Drawer.Screen name="Errands" component={Calendar} />
        <Drawer.Screen name="Meals" component={Calendar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

);

