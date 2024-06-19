import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
//components
import NavigationColumnComponent from "./NavigationColumnComponent.component";



export default function ModalForNavigation({AtivoOuInativoTrueEfalse, PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui}){
    return(
        <Modal style={ConfigStylesModal.ModalConfiguration} 
        visible={AtivoOuInativoTrueEfalse} transparent={true}>
            <View style={ConfigStylesModal.ModalMain}>
                {/* em cima da janela de modal sobe a de navegação, não na HOMEPAGE */}
            <NavigationColumnComponent 
            PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui={PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui}/>
            <TouchableOpacity style={ConfigStylesModal.ClickZone} onPress={PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui}>
                {/* ESSA AREA QUANDO CLICADA VAI CANCELAR O MODAL */}
            </TouchableOpacity>
            </View>
        </Modal>
    );
}
const ConfigStylesModal = StyleSheet.create({
    ModalMain:{
        flex: 8,
        flexDirection: 'row',
    },
    ClickZone:{
        flex: 4,
        backgroundColor: '#000000',
        opacity: 0.2,
    },
    ModalConfiguration:{

    },
})