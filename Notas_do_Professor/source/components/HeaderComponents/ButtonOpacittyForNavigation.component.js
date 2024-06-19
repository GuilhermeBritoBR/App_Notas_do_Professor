import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image} from "react-native";
//navegação

export default function ButtonOpacittyForNative({title, ImagemDoBotao,rotaDeNavegaçãoSomenteONomeDaPagina}){
    return(
        <TouchableOpacity style={ButtonOpacitty.Input} onPress={rotaDeNavegaçãoSomenteONomeDaPagina}>
            <Image
                source={ImagemDoBotao}
                style={ButtonOpacitty.ImageButton}
            />
            <Text style={ButtonOpacitty.font}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonOpacitty = StyleSheet.create({
    Input:{
        width: '100%',
        height: '8vh',
        backgroundColor: '#D9D9D9',
        textAlign: 'center',   
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottom: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    font:{
        fontSize: '2.4vh',
        color: '#000000',
        
    },
    ImageButton:{
        height: '4.8vh',
        width: '4.8vh',
        margin: '3%',
    },
   
})