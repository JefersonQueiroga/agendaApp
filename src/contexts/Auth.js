import { useNavigation } from '@react-navigation/native'
import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const[user,setUser] = useState({})
    const navigation = useNavigation();

    function signIn(email,password){
        if(email != '' && password !== ''){
            setUser({
                email: email,
                status: 'Ativo'
            })
            
            navigation.navigate('Task');
        }
        
    }


    return(
        <AuthContext.Provider value={{nome:"Jeferson Queiroga", signIn,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;