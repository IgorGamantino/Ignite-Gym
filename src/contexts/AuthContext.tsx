import { ReactNode, createContext, useState } from "react";

type UserProps = {
    refresh_token:string;
    token: string;
    email: string;
    id: number;
    name: string;
}



type DataContext = {
    userData: UserProps | null;
    setUserData:  React.Dispatch<React.SetStateAction<UserProps | null>>
}

export const AuthContext = createContext({} as DataContext);

export const AuthContextProvider = ({children}:{children:ReactNode}) => {
    const [userData, setUserData] = useState<UserProps | null>(null)
    return (
        <AuthContext.Provider value={{ userData ,setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}