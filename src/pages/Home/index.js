import React,{useContext, useState} from 'react'
import { Image} from 'react-native'
import { Container,ImageLogotipo,Top,TitleApp,FormLogin} from './styles'
import Logo from '../../images/logo.png'

import  InputLogin  from '../../components/InputLogin';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/Auth';



export default function Home(){
   // Conxtext
   const { signIn } = useContext(AuthContext);

   const[login,setLogin] = useState('');
   const[password,setPassword] = useState('');

   function handleLogin(){
      signIn(login,password);
   }
   return(
      <Container>
            <ImageLogotipo source={Logo} style={{   width: 100, height: 145}}/> 
            <TitleApp> {`Agenda\n IFRN`}</TitleApp>
           
            <FormLogin>
               <InputLogin placeholder="Login" value={login} 
                  onChangeText={(text)=>setLogin(text)}/>

               <InputLogin placeholder="Senha" value={password} 
                  onChangeText={(text) => setPassword(text) }/>
               <Button onPress={handleLogin}/>
            </FormLogin>
       </Container>
   );
}