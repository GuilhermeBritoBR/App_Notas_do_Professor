import React from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
//css

//components
import ButtonOpacittyForNative from "./ButtonOpacittyForNavigation.component";
//imagens 
import { Advertencias, Calendar, Notes, Pencel, Prensenca, School, sanduiche } from "../../assets/columnIcons/IconsColumn.assets";

export default function NavigationColumnComponent({PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui}){
    return(
        <View style={NavigationStyles.MainView}>
            {/* Botão de fechar modal */}
        <View style={NavigationStyles.Input}>
         <TouchableOpacity style={NavigationStyles.Icon} onPress={PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui}>
            <Image
                source={sanduiche}
                style={NavigationStyles.ImageButton}
            />
        </TouchableOpacity>
        </View>
        <ButtonOpacittyForNative ImagemDoBotao={Calendar} title={"Calendário"}/> 
        <ButtonOpacittyForNative ImagemDoBotao={Notes} title={"Notas"}/> 
        <ButtonOpacittyForNative ImagemDoBotao={Advertencias} title={"Advertências"}/> 
        <ButtonOpacittyForNative ImagemDoBotao={Prensenca} title={"Presenças"}/> 
        <ButtonOpacittyForNative ImagemDoBotao={Pencel} title={"Planejamento das Aulas"}/> 
        <ButtonOpacittyForNative ImagemDoBotao={School} title={"Salas de Aula"}/> 
        </View>
    );
}
const NavigationStyles = StyleSheet.create({
    MainView:{
        backgroundColor: '#D9D9D9',
        flex:1,
        flexDirection: 'column',  
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5,
    },
    ImageButton:{
        height: '6.4vh',
        width: '6.4vh', 
    },
    Input:{
        width: '100%',
        height: '6.4vh',
        backgroundColor: '#D9D9D9',
        marginBottom: '3%',
        textAlign: 'center',   
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Icon:{
        height: '4.8vh',
        width: '4.8vh',
        margin: '3%',
    }
});