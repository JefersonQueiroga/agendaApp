import React,{useState} from 'react'
import {Text,TextInput,TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';

import Input from '../../components/Input';
import ButtonForm from '../../components/ButtonForm';

export default function Task(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        alert("CLICOU")
    }

    return(
        <Container>
            <Form>
                <TextTitle>Cadastro de Tarefa</TextTitle>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Digite seu email"
                />

                <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Digite sua senha"
                />

                <ButtonForm title="Cadastrar" color='#1DB863' onPress={handleLogin}/>
            </Form>
        </Container>
    );
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 100px;
  background-color: #FFFFFF;
`;

export const Form = styled.View`
    width: 90%;
    align-items: center;
`;

export const TextTitle = styled.Text`
    color: #1DB863;
    font-size: 25px;
    font-weight: 800;
`; 