import React,{useContext, useState} from 'react'
import { AuthContext } from '../../contexts/Auth';
import styled from 'styled-components/native';
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity,Text } from 'react-native';


export default function Form(){
   // usando os hooks 
   const{ control,handleSubmit,formState: { errors }  } = useForm()
   const[login,setLogin] = useState('');
   const[password,setPassword] = useState('');

   function enviarForm(data){
      alert(data.email)
   }
   return(
      <Container>
            <Controller
                control={control}
                name="nome"
                rules={{
                    required: "Nome é obrigatório"
                }}
                render={ ({ field: { value, onChange} }) =>( 
                    <Input value={value} onChangeText={onChange} /> 
                )}
            /> 
            {errors.nome && <TextError>Campo Obrigatório</TextError>}

            <Controller
                control={control}
                name="email"
                render={ ({ field: { value, onChange} }) =>( 
                    <Input value={value} onChangeText={onChange}/> 

                )}
            />


            <TouchableOpacity onPress={handleSubmit(enviarForm)}><Text>Enviar</Text></TouchableOpacity>  
       </Container>
   );
}


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFFFFF; 
  align-items: center;
  padding-top: 100px;
`;

export const Input = styled.TextInput`
    width: 90%;
    height: 40px;
    background-color: #EEEEEE;
    padding-left: 15px;
    font-size: 18px;
    border-radius:  10px;
    margin: 5px;
`;

export const TextError = styled.Text`
    font-size: 20px;
    color: red;
`;


