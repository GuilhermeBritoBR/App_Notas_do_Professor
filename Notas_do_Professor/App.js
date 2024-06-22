import React from 'react';
//IMPORTAR TEXT
import { Text, View } from 'react-native';
//paginas importadas 
import RegisterPage from './source/pages/RegisterPage.pages.js';
import HomePage from './source/pages/HomePage.pages.js';
import LoginPage from './source/pages/LoginPage.pages.js';
//navegação na aplicação
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//script de verificar token para redirecionar o usuario logado ou deslogado
import { VerifyToken } from './source/scripts/VerifyToken.script.js';
//importar hooks
import { useEffect, useState } from 'react';
//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
//criar stack
const Stack = createNativeStackNavigator();

export default function App() {
  const [paginaParaOUsuarioSeEstiverDeslogadoOuLogado, setPage] = useState(null);
  useEffect(()=>{
    async function LoadToken(){
      const token = await AsyncStorage.getItem('@token');
      const response = await VerifyToken(token);
      if(response === 0){
          console.log('Valor 0 como resultado da verificação, logo deslogado ou expirado')
          setPage("RegisterPage");
      }else if(response === 1){
        console.log('Valor 1 como resultado da verificação, logo logado')
        setPage("HomePage");
      }
      //manter carregando enquanto o app busca na api
    }
    LoadToken();
  },[])
  if (paginaParaOUsuarioSeEstiverDeslogadoOuLogado === null) {
    return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}>
    <Text style={{ fontSize: 18}}>Carregando APP</Text>
    </View> )
  }

  
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={paginaParaOUsuarioSeEstiverDeslogadoOuLogado}
      screenOptions={{
        headerShown:false,
      }}
      >
      {/* ROTAS */}
      <Stack.Screen name="RegisterPage" component={RegisterPage}/>
      <Stack.Screen name="HomePage" component={HomePage}/>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


