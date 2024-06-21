import React from 'react';
//paginas importadas 
import RegisterPage from './source/pages/RegisterPage.pages.js';
import HomePage from './source/pages/HomePage.pages.js';
//navegação na aplicação
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//criar stack
const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="RegisterPage"
      screenOptions={{
        headerShown:false,
      }}
      >
      {/* ROTAS */}
      <Stack.Screen name="RegisterPage" component={RegisterPage}/>
      <Stack.Screen name="HomePage" component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


