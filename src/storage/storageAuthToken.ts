import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN_STORAGE } from "./storageConfig";



export async function storageUserTokenSave(token:string){
    await AsyncStorage.setItem(USER_TOKEN_STORAGE, token)
}

export async function getStorageUserTokenSave(){
    await AsyncStorage.getItem(USER_TOKEN_STORAGE)
}
