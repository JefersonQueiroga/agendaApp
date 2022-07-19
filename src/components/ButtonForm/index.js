import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';


export default function ButtonForm(props){
   return(
        <Button color={props.color} {...props}>
            <TextButton>{props.title}</TextButton>
        </Button>
   );
}


export const Button = styled(TouchableOpacity)`
    height: 50px;
    width: 100%;
    background-color: ${props => props.color || '#666666'};
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