import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";

import { storageUserSave, getStorageUser } from "@storage/storageUser";
import { ReactNode, createContext, useEffect, useState } from "react";


type DataContext = {
    userData: UserDTO | null;
    setUserData:  React.Dispatch<React.SetStateAction<UserDTO | null>>;
    signIn: (email: string, password: string) =>  Promise<void>;
    userLoadingData: boolean;
}

export const AuthContext = createContext({} as DataContext);

export const AuthContextProvider = ({children}:{children:ReactNode}) => {
    const [userData, setUserData] = useState<UserDTO | null>(null);
    const [userLoadingData,setUserLoadingData] = useState(true);

    async function signIn(email:string,password:string) {
        try {
            const { data } =  await api.post('/sessions', {
                email,
                password
               });
            
               if(data.user){
                setUserData(data.user);
                storageUserSave(data.user)
               }

           
        } catch (error) {
            throw error;
        }
        
    }


    async function loadUserData () {
      const user = await getStorageUser();

        setUserData(user);
        setUserLoadingData(false);
    };


    useEffect(()=> {
        loadUserData()
    }, [])


    


    return (
        <AuthContext.Provider value={{ userData ,setUserData , signIn,userLoadingData}}>
            {children}
        </AuthContext.Provider>
    )
}