import { Text, StyleSheet, TouchableOpacity } from "react-native";
//css global
import { GlobalStyles } from "../../styles/GlobalStyles.styles";

export default function MainButtonComponent({Title}){
    return(
        <TouchableOpacity style={ButtonStyles.Button}>
            <Text style={[GlobalStyles.h2,{color: '#ffffff'}]}>{Title}</Text>
        </TouchableOpacity>
    )
}
const ButtonStyles = StyleSheet.create({
    Button:{
        backgroundColor: '#000000',
        width: '24.4vh',
        height: '5.8vh',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1%',
    },
    
})