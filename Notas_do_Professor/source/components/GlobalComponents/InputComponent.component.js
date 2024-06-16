import { StyleSheet, TextInput } from "react-native";

export default function InputComponent({Placeholder, ApareceTexto_TrueOuFalse}){
    return(
        <TextInput
        placeholder={Placeholder}
        style={InputStyles.Input}
        secureTextEntry={ApareceTexto_TrueOuFalse}
        
        />
    )
}
const InputStyles = StyleSheet.create({
    Input:{
        width: '24.4vh',
        height: '5.8vh',
        backgroundColor: '#ffffff',
        fontSize: '2.4vh',
        color: '#000000',
        marginBottom: '3%',
        textAlign: 'center',
    },
})