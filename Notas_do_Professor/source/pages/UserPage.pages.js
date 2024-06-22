//import react
import React from 'react';
//hooks
import { useState } from 'react';
//tags
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
//css
import { GlobalStyles } from '../styles/GlobalStyles.styles';
import { FormStyles } from '../components/FormTheRegisterAndLogin/FormComponent.Component';
//components
import HeaderComponent from '../components/GlobalComponents/Header.component';
import InputComponent from '../components/GlobalComponents/InputComponent.component';
import ModalForNavigation from '../components/HeaderComponents/ModalForNavigation.component';
//scripts funções
import ConfigAPI from '../scripts/ConfigAPI';
//salvar nome
import { SaveName } from '../scripts/SaveName.script';
//icone de mudar nome
import { Pencel } from '../assets/columnIcons/IconsColumn.assets';
//input de selecionar
import { Picker } from '@react-native-picker/picker';
import ModalComponent from '../components/UserPageComponents/ModalComponent.component';

export default function UserPage(){
    //constante tamanho da fonte
    const [tamanhoDaFonte, setTamanhoDaFonte]= useState(0);
    //constante com o nome do usuario e email recebido pela API
    const [name, setName]=useState("Guilherme");
    const [email, setEmail]=useState("brito@brito");
    const [senha, setSenha] = useState("teste123");
    //constante para abrir modal
    const [NaveBar, setNaveBar] = useState(false);
    const [ModalVisible, setModalVisible] = useState(false);
    //function
    function OpenModal(){
        if(!ModalVisible){
            setModalVisible(true);
        }else{
            setModalVisible(false);
        }
    }
    return(
    <View style={GlobalStyles.container}>
        <HeaderComponent 
         seEstiverDeslogadoPorNone={""} 
        propiedadeParaAbrirModal={() =>setModalVisible(true)}
        />
        <View style={[GlobalStyles.content,{justifyContent: 'center', alignItems: 'center'}]}>
            {/* A coluna de navegação */} 
            <ModalForNavigation AtivoOuInativoTrueEfalse={NaveBar}
            PropiedadeFecharModalDaNavigationColumnXModalXHomepagePorFuncaoAqui={()=> setNaveBar(true)}
            />
            <View style={[FormStyles.MainFormView,{padding: '10%'}]}>
                <View style={FormStyles.WhiteBlockImage}>
                    <Image 
                    source={require('../assets/header/UserIcon.png')}
                    style={FormStyles.UserIcon}
                    />
                </View>
                {/* Nome */}
                    <View style={UserPageStyles.DivDoInputDeMudarNome}>
                        <Text style={GlobalStyles.h2}>Nome: {name}</Text>
                        <TouchableOpacity onPress={()=>OpenModal()}
                        style={UserPageStyles.pencelStyle}>
                        <Image
                        source={Pencel}
                        style={UserPageStyles.pencelStyle}
                        />
                        </TouchableOpacity>
                    </View>
                    {/* Email */}
                    <View style={UserPageStyles.DivDoInputDeMudarNome}>
                        <Text style={GlobalStyles.h2}>Email: {email}</Text>
                        <TouchableOpacity style={UserPageStyles.pencelStyle}>
                        <Image
                        source={Pencel}
                        style={UserPageStyles.pencelStyle}
                        />
                        </TouchableOpacity>
                    </View>
                    <ModalComponent 
                    
                    visibilidadeDoModal={ModalVisible}/>
                    {/* Senha */}
                    <View style={UserPageStyles.DivDoInputDeMudarNome}>
                        <Text style={GlobalStyles.h2}>Senha: {senha}</Text>
                        <TouchableOpacity style={UserPageStyles.pencelStyle}>
                        <Image
                        source={Pencel}
                        style={UserPageStyles.pencelStyle}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={UserPageStyles.fixText}>
                            <Text style={GlobalStyles.h2}>Tema</Text>
                    </View>
                        <View style={UserPageStyles.themeViewBlock}>
                            <View style={[UserPageStyles.block,{backgroundColor: '#000000'}]}></View>
                            <View style={[UserPageStyles.block,{backgroundColor: '#ffffff'}]}></View>
                        </View>
                            <View style={UserPageStyles.fixText}>
                                <Text style={GlobalStyles.h2}>Tamanho da fonte</Text>
                            </View>
                        <Picker style={UserPageStyles.Select} onValueChange={(valor)=>setTamanhoDaFonte(valor)}>
                            <Picker.Item key={0} value={36} label={"Grande"}/>
                            <Picker.Item key={0} value={24} label={"Normal"}/>
                            <Picker.Item key={0} value={18} label={"Pequena"}/>
                        </Picker>
            </View>
        </View>
    </View>
    )
}
const UserPageStyles = StyleSheet.create({
    pencelStyle:{
        height: '3.2vh',
        width: '3.2vh',
        margin: 1,
    },
    DivDoInputDeMudarNome:{
        flexDirection: 'row',
        padding: '1vh',
    },
    themeViewBlock:{
        flexDirection: 'row',
    },
    fixText:{
        margin: '3%',
    },
    block:{
        height: '5.8vh',
        width: '5.8vh',
        borderColor: '#000000',
        borderStyle:'solid',
        borderWidth: 1,
        cursor: 'pointer',
    },
    Select:{
        width: '24.4vh',
        height: '5.8vh',
        backgroundColor: '#ffffff',
        fontSize: '3vh',
    },
})