import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//configurando axios
const ConfigAPI = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
ConfigAPI.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem('@token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
export default ConfigAPI;