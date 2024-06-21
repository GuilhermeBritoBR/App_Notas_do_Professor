import { Text, StyleSheet, TouchableOpacity } from "react-native";
//css global
import { GlobalStyles } from "../../styles/GlobalStyles.styles";

export default function MainButtonComponent({Title,FunçaoCompletaAquiMainButton}){
    return(
        <TouchableOpacity style={ButtonStyles.Button} onPress={FunçaoCompletaAquiMainButton}>
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