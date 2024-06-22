import React from 'react';
//tags
import { View} from 'react-native';
//axios
import axios from 'axios';
//hooks
import { useState } from 'react';
//css
import { GlobalStyles } from '../styles/GlobalStyles.styles';
//components
import HeaderComponent from '../components/GlobalComponents/Header.component';
import FormComponent from '../components/FormTheRegisterAndLogin/FormComponent.Component';
import InputComponent from '../components/GlobalComponents/InputComponent.component';
//scripts funções
import ConfigAPI from '../scripts/ConfigAPI';
import { SalvarToken } from '../scripts/Token.script';
import { SaveName } from '../scripts/SaveName.script';
//navegação
import {useNavigation} from '@react-navigation/native';


export default function RegisterPage() {
    //navegação
    const Navigation = useNavigation();
    //constante com dados
    const[email, setEmail]= useState('');
    const[name, setName]= useState("");
    const[password, setPassword]= useState("");
    //essas funções estão aqui pois estava com problemas em setar o texto nas variaveis
    //com estas funções priorizo eles na ordem de execução
    const handleSetName = (text) => {
        console.log("Setting name:", text);
        setName(text);
    }

    const handleSetEmail = (text) => {
        console.log("Setting email:", text);
        setEmail(text);
    }

    const handleSetPassword = (text) => {
        console.log("Setting password:", text);
        setPassword(text);
    }
    //enviar dados
    const RegisterPage_URL_POST = 'http://localhost:3000/registerPage/cadastroDoProfessor';
    //função para filtrar dados
    function FilterData(){
        if(name.length >= 3 && password.length >= 8 && email.length >= 8){
            //continuar processo
            UploadDataUser();
        }else{
            alert('Preencha os campos!');
        }
    }
    //pós função de filtragem
    const UploadDataUser = async() =>{
        const dataForAPI = {
            name, email, password,
        };
        try{
            const resposta = await ConfigAPI.post(RegisterPage_URL_POST, dataForAPI);
            //pega token 
            const {token, name} = resposta.data;
            //salva token
            await SalvarToken(token);
            await SaveName(name);
            alert("Cadastro realizado com sucesso!");
            //redirecionar para a HOMEPAGE
            Navigation.navigate('HomePage');
            
        }catch(err){
            console.log(`Erro ao enviar dados de cadastro, segue o erro: ${err}`);
        }
    }


return( 
    <View style={GlobalStyles.container}>
        {/* Header inicial com algumas propiedades de saudação, configuração e perfil vazias */}
        <HeaderComponent saudaçao={""} seEstiverDeslogadoPorNone={'none'}/>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
            <FormComponent 
            TextoEsqueciSenhaOuJaTenhoConta={"Já tem conta, entre aqui!"} EntrarOuCadastrar={"Cadastrar"}
            FunçaoCompletaAquiMainButtonXFormXRegisterPage={()=>FilterData()}
            ParaOndeOtextoDeveLevarEsqueciSenhaOuLogin={()=> Navigation.navigate('LoginPage')}
            >
                <InputComponent 
                ValorDoInput_INPUTXFORM={name}
                SetarValorDeUseStates_INPUTXFORM={(text)=>handleSetName(text)}
                Placeholder={"Seu primeiro Nome.."} ApareceTexto_TrueOuFalse={false} />

                <InputComponent 
                ValorDoInput_INPUTXFORM={email}
                SetarValorDeUseStates_INPUTXFORM={(text)=>handleSetEmail(text)}
                Placeholder={"Digite seu Email.."} ApareceTexto_TrueOuFalse={false} />

                <InputComponent 
                ValorDoInput_INPUTXFORM={password}
                SetarValorDeUseStates_INPUTXFORM={(text)=>handleSetPassword(text)}
                Placeholder={"Digite sua Senha.."} ApareceTexto_TrueOuFalse={true}/>
            </FormComponent>
        </View>
    </View>
);

}


