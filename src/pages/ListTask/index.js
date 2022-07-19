import React,{useState,useContext} from 'react'
import { View,Text } from 'react-native'
import { AuthContext } from '../../contexts/Auth';
import styled from 'styled-components/native';

export default function ListTask(){
    const { user } = useContext(AuthContext);

    return(
        <Container>
            <Text>{ user.email }</Text>
        </Container>
    )
}


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`;