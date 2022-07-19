
import styled from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,  
} from '@expo-google-fonts/roboto'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1DB863; 
  align-items: center;
  padding-top: 100px;
`;


export const TitleApp = styled.Text`
  font-size: 33px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 800;
`;

export const ImageLogotipo = styled.Image`
  width: 50px;
  height: 70px;
  margin: 20px;
`;

export const FormLogin = styled.View`
  width: 80%;
  margin-top: 40px;
  height: 200px;
  justify-content: space-between;
`;

