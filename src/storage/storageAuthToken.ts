import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN_STORAGE } from "./storageConfig";

type SaveUserTokenProps = {
    token: string;
    refresh_token: string;
}

export async function storageUserTokenSave(token:string,refresh_token:string){
    await AsyncStorage.setItem(USER_TOKEN_STORAGE, JSON.stringify({token,refresh_token}))
}

export async function getStorageUserTokenSave(){
   const response =  await AsyncStorage.getItem(USER_TOKEN_STORAGE)

    if(!response){
        return {} as SaveUserTokenProps;
    }

  const {token,refresh_token}: SaveUserTokenProps= JSON.parse(response);

   return {token,refresh_token} as SaveUserTokenProps
}

export async function clearStorageUser(){
    await AsyncStorage.removeItem(USER_TOKEN_STORAGE)
}