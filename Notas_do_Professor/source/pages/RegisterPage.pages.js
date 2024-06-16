import React from 'react';
//tags
import {View, Text } from 'react-native';
//css
import { GlobalStyles } from '../styles/GlobalStyles.styles';
import HeaderComponent from '../components/GlobalComponents/Header.component';

export default function RegisterPage() {
return( 
    <View style={GlobalStyles.container}>
        {/* Header inicial com algumas propiedades de saudação, configuração e perfil vazias */}
        <HeaderComponent saudaçao={""} seEstiverDeslogadoPorNone={'none'}/>
        <View style={{flex: 8}}>

        </View>
    </View>
)
}


