import React,{useState} from 'react'
import {TextInput} from 'react-native'
import { Container,InputForm} from './styles'


export default function InputLogin(props){
   return(
      <Container>
         <InputForm placeholder={props.placeholder} {...props}/>
      </Container> 
   );
}