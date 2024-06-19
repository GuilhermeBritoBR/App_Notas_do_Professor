import React from 'react';
//tags
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
//hooks
import { useState } from 'react';
//css
import { GlobalStyles } from '../../styles/GlobalStyles.styles';
//components
import ModalForNavigation from '../HeaderComponents/ModalForNavigation.component';
//scripts

export default function HeaderComponent({saudaçao, seEstiverDeslogadoPorNone, propiedadeParaAbrirModal}) {
  
return( 
    <View style={GlobalStyles.header}>
        {/* Header com algumas propiedades de saudação, configuração e perfil */}
        {/* Cada view das três servem para posicionar os elemento horizontalmente */}
        {/* A propiedade seEstiverDeslogadoPorNone é para ocultar a config e user para o usuário deslogado, autoexplicativa */}
        <View style={[PositonIcons.Postion,{justifyContent:'flex-start', marginLeft: '2%' }]}>
            {/* saudação é a primeira propiedade que vai dizer "Prazer Professor(a) {nome}!" */}
            <TouchableOpacity 
            onPress={() => propiedadeParaAbrirModal(true)}
            style={[PrimaryIcon.Book,{display: seEstiverDeslogadoPorNone}]}>
            <Image
            source={require('../../assets/header/sanduiche.png')}
            style={PrimaryIcon.Book}/>
            </TouchableOpacity>
            <Text style={GlobalStyles.h1}>{saudaçao}</Text>
        </View>
        
        <View style={[PositonIcons.Postion,{justifyContent:'center', }]}>
            {/* Nome da aplicação */}
            <Text style={GlobalStyles.h1}>Notas do Professor</Text>
            {/* Logo da aplicação */}
            <Image
            source={require('../../assets/header/BookIcon.png')}
            style={PrimaryIcon.Book}
            />
        </View>
        <View style={[PositonIcons.Postion,{justifyContent:'flex-end', marginRight: '3%', }]}>
            {/* Icone de configuração */}
            <Image
            source={require('../../assets/header/ConfigIcon.png')}
            style={[PrimaryIcon.Config,{display: seEstiverDeslogadoPorNone}]}
            />
            {/* Icone do usuario */}
            <Image
            source={require('../../assets/header/UserIcon.png')}
            style={[PrimaryIcon.User,{display: seEstiverDeslogadoPorNone}]}
            />
            
        </View>
    </View>
)
}
//css do icone principal da aplicação
const PrimaryIcon = StyleSheet.create({
    Book:{
        margin: '3%',
        height: '6.4vh',
        width: '6.4vh',
    },
    User:{
        margin: '3%',
        height: '5.6vh',
        width: '5.6vh',
    },
    Config:{
        margin: '3%',
        height: '5.6vh',
        width: '5.6vh',
    },
});
const PositonIcons = StyleSheet.create({
    Postion:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
    },
})


