import React from "react";
import { View } from "react-native";
//hooks
import { useState } from "react";
//css
import { GlobalStyles } from "../styles/GlobalStyles.styles";
//components
import HeaderComponent from "../components/GlobalComponents/Header.component";
import ButtonOpacittyForNative from "../components/HeaderComponents/ButtonOpacittyForNavigation.component";
import ModalForNavigation from "../components/HeaderComponents/ModalForNavigation.component";


export default function HomePage(){
    //constante do nome do usuario
    const nomeDoUsuario = "Guilherme";
    //constante para abrir modal
    const [ModalVisible, setModalVisible] = useState(false);
    return(
    <View style={GlobalStyles.container}>
        <HeaderComponent 
        saudaçao={`Prazer, ${nomeDoUsuario}!`} seEstiverDeslogadoPorNone={""} 
        propiedadeParaAbrirModal={() =>setModalVisible(true)}
        />
        <View style={[GlobalStyles.content]}>
            {/* A coluna de navegação */} 
            <ModalForNavigation AtivoOuInativoTrueEfalse={ModalVisible}
            PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui={()=> setModalVisible(false)}
            />
        </View>
    </View>
    );
}