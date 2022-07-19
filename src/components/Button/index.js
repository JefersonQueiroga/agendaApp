import React from 'react'
import {TouchableOpacity} from 'react-native'


export default function Button(props){
   return(
        <ButtonSimple onPress={props.onPress} {...props}>
            <TextButton>Entrar</TextButton>
        </ButtonSimple>
   );
}




import styled from 'styled-components/native';

export const ButtonSimple = styled(TouchableOpacity)`
    height: 50px;
    width: 100%;
    background-color: #666666;
    border-radius: 10px;
    margin: 5px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 22px;
    color: #FFFFFF;
    font-weight: 500;
`;