import React from "react";
import { View } from "react-native";
//css
import { GlobalStyles } from "../styles/GlobalStyles.styles";
//components
import HeaderComponent from "../components/GlobalComponents/Header.component";
import NavigationColumnComponent from "../components/GlobalComponents/NavigationColumnComponent.component";
import ButtonOpacittyForNative from "../components/HeaderComponents/ButtonOpacittyForNavigation.component";


export default function HomePage(){
    //constante do nome do usuario
    const nomeDoUsuario = "Guilherme";
    return(
    <View style={GlobalStyles.container}>
        <HeaderComponent saudaçao={`Prazer, ${nomeDoUsuario}!`} seEstiverDeslogadoPorNone={""}/>
        <View style={[GlobalStyles.content]}>
            {/* A coluna de navegação */} 
        </View>
    </View>
    );
}