import React from "react";
import { StyleSheet, View } from "react-native";
//css

//components

export default function NavigationColumnComponent(){
    return(
        <View style={NavigationStyles.MainView}>

        </View>
    );
}
const NavigationStyles = StyleSheet.create({
    MainView:{
        backgroundColor: '#D9D9D9',
        flex:1,
        flexDirection: 'row',  
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5,
    },
});