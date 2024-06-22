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


export default function LoginPage() {
    //navegação
    const Navigation = useNavigation();
    //constante com dados
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState("");
    //essas funções estão aqui pois estava com problemas em setar o texto nas variaveis
    //com estas funções priorizo eles na ordem de execução

    const handleSetEmail = (text) => {
        console.log("Setting email:", text);
        setEmail(text);
    }

    const handleSetPassword = (text) => {
        console.log("Setting password:", text);
        setPassword(text);
    }
    //enviar dados
    const RegisterPage_URL_POST = 'http://localhost:3000/loginPage/loginDoProfessor';
    //função para filtrar dados
    function FilterData(){
        if(password.length >= 1 && email.length >= 1){
            //continuar processo
            UploadDataUser();
        }else{
            alert('Preencha os campos!');
        }
    }
    //pós função de filtragem
    const UploadDataUser = async() =>{
        const dataForAPI = {
            email, password,
        };
        try{
            const resposta = await ConfigAPI.post(RegisterPage_URL_POST, dataForAPI);
            //pega token 
            const {token, name} = resposta.data;
            //salva token
            await SalvarToken(token);
            await SaveName(name);
            alert("Login realizado com sucesso!");
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
            TextoEsqueciSenhaOuJaTenhoConta={"Esqueceu a senha? Entre aqui!"} EntrarOuCadastrar={"Entrar"}
            FunçaoCompletaAquiMainButtonXFormXRegisterPage={()=>FilterData()}
            ParaOndeOtextoDeveLevarEsqueciSenhaOuLogin={()=> Navigation.navigate('#')}
            >
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


