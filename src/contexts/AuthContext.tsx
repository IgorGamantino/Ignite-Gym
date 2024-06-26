import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { storageUserTokenSave } from "@storage/storageAuthToken";
import { storageUserSave, getStorageUser, clearStorageUserData} from "@storage/storageUser";
import { ReactNode, createContext, useEffect, useState } from "react";


type DataContext = {
    userData: UserDTO | null;
    setUserData:  React.Dispatch<React.SetStateAction<UserDTO | null>>;
    signIn: (email: string, password: string) =>  Promise<void>;
    userLoadingData: boolean;
    logout: () => void;
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

               if(data.user && data.token && data.refresh_token){
                storageUserTokenSave(data.token, data.refresh_token)

                api.defaults.headers.common.Authorization = `Bearer ${data.token}`
                setUserData(data.user);
                storageUserSave(data.user)

         }
        } catch (error) {
            throw error;
        }
        
    }



    async function logout(){
        setUserData(null);
        clearStorageUserData();
    }


    async function loadUserData () {
      const user = await getStorageUser();

        setUserData(user);
        setUserLoadingData(false);
    };


    useEffect(()=> {
        loadUserData()
    }, [])


  useEffect(() => {
      const instance =  api.registerInterceptTokenManager(logout);
      return () => {
       instance();
     };
    },[logout])
    


    return (
        <AuthContext.Provider value={{ userData ,setUserData , signIn,userLoadingData, logout}}>
            {children}
        </AuthContext.Provider>
    )
}