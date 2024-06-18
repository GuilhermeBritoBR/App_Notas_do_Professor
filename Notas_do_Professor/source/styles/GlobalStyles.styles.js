import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fbfbf8',
        width: '100%',
    },
    content:{
        flex:8,
        flexDirection: 'row',
    },
    header:{
        flex: 1,
        width: '100%',
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 5,
    },
    leftComumn:{

    },
    h1:{
        fontSize: '4vh',
        color: '#000000',
    },
    h2:{
        fontSize: '3vh',
        color: '#000000',
    },
    h3:{
        fontSize: '2vh',
        color: '#000000',
    },
});

