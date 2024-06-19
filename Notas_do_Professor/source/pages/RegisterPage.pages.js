import React from 'react';
//tags
import {Alert, View} from 'react-native';
//css
import { GlobalStyles } from '../styles/GlobalStyles.styles';
import HeaderComponent from '../components/GlobalComponents/Header.component';
import FormComponent from '../components/FormTheRegisterAndLogin/FormComponent.Component';

export default function RegisterPage() {
return( 
    <View style={GlobalStyles.container}>
        {/* Header inicial com algumas propiedades de saudação, configuração e perfil vazias */}
        <HeaderComponent saudaçao={""} seEstiverDeslogadoPorNone={'none'}/>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
            <FormComponent 
            TextoEsqueciSenhaOuJaTenhoConta={"Já tem conta, entre aqui!"} EntrarOuCadastrar={"Cadastrar"}/>
        </View>
    </View>
)
}


