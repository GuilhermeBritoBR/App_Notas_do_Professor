import { View, StyleSheet, Text, Image } from "react-native";
//componentes
import InputComponent from "../GlobalComponents/InputComponent.component";
import MainButtonComponent from "../GlobalComponents/MainButtonComponent.component";
//css global
import { GlobalStyles } from "../../styles/GlobalStyles.styles";

export default function FormComponent({EntrarOuCadastrar, TextoEsqueciSenhaOuJaTenhoConta}){
    return(
        <View style={FormStyles.MainFormView}>
            {/* A primeira VIEW segura todos dentro do form */}
                {/* Essa segunda View,"WhiteBlock", Segura a imagem dentro do bloco branco */}
                <View style={FormStyles.WhiteBlockImage}>
                    <Image
                    source={require('../../assets/header/UserIcon.png')}
                    style={FormStyles.UserIcon}
                    />
                </View>
                {/* Resto do formulário */}
                <InputComponent Placeholder={"Digite seu Nome.."} ApareceTexto_TrueOuFalse={false} />
                <InputComponent Placeholder={"Digite sua senha.."} ApareceTexto_TrueOuFalse={true}/>
                <MainButtonComponent Title={EntrarOuCadastrar} />
                <Text style={GlobalStyles.h3}>{TextoEsqueciSenhaOuJaTenhoConta}</Text>
        </View>
    );
}
const FormStyles = StyleSheet.create({
    MainFormView:{
        width: '75.4vh',
        height: '49.6vh',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
    },
    WhiteBlockImage:{
        backgroundColor: '#ffffff',
        width: '6.4vh',
        height: '6.4vh',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
    },
    UserIcon:{
        height: '5.6vh',
        width: '5.6vh',
    },
})