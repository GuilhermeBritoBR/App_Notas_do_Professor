//import react
import React from "react";
//tags
import { Modal, StyleSheet, View } from "react-native";
//components
import InputComponent from "../GlobalComponents/InputComponent.component";

export default function ModalComponent({visibilidadeDoModal, FuncaoInput}){
    return(
        <Modal visible={visibilidadeDoModal} >
            <View style={stylesModal.ModalContainer}>
                <View style={stylesModal.clickZone}>
                <View style={stylesModal.ModalContent}>
                    <InputComponent ValorDoInput_INPUTXFORM={FuncaoInput} ApareceTexto_TrueOuFalse={false} />
                </View>
                </View>
            </View>
        </Modal>
    )
}
const stylesModal = StyleSheet.create({
    ModalContainer:{
        flex:1,
        opacity: 1,
    },
    ModalContent:{
        width: '75.4vh',
        height: '49.6vh',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 5,
    },
    clickZone:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        backgroundColor: '#ffffff',
        cursor:'auto',
    }
})
