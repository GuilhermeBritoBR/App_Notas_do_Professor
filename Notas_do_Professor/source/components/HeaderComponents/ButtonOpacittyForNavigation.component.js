import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonOpacittyForNative({title}){
    return(
        <TouchableOpacity style={ButtonOpacitty.Input}>
            <Text style={ButtonOpacitty.font}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonOpacitty = StyleSheet.create({
    Input:{
        width: '24.4vh',
        height: '5.8vh',
        backgroundColor: '#ffffff',
        marginBottom: '3%',
        textAlign: 'center',   
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    font:{
        fontSize: '2.4vh',
        color: '#000000',
    },
})