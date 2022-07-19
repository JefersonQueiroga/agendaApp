import React,{useState} from 'react'
import {TextInput} from 'react-native'
import styled from 'styled-components/native';


export default function Input(props){
   return(
      <Container>
         <InputForm placeholder={props.placeholder} {...props}/>
      </Container> 
   );
}


export const Container = styled.View`
    height: 55px;
    width: 100%;
    border-color: #B2B2B2;
    border-width: 1px;
    border-radius: 10px;
    margin: 5px;
`;

export const InputForm = styled.TextInput`
    flex: 1;
    height: 100%;
    background-color: #FFFFFF;
    padding-left: 15px;
    font-size: 18px;
    border-radius:  10px;
`;