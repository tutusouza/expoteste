import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    /* margin-top: ${ StatusBar.currentHeight || 0 }; */
`;

export const Texto = styled.Text`
    color: #333;
    font-size: 20px;
`;

export const Contato = styled.TouchableOpacity`
    flex: 1;
    flex-direction:row;
    padding: 10px 0px 0px 0px;
    margin: 8px 16px;
    overflow:hidden;
    /* border: 1px solid #000000; */
   /*  border-bottom-color: #cecece;  */
`;

export const ContainerAvatar = styled.View`    
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const ContainerDados = styled.View`
    flex: 1;
    border: 1px solid #00000000;
    border-bottom-color: #cecece; 
    padding-bottom: 10px;
    /* width: 100%;
    height: 40px; */
`;

export const ContainerHoraNotificacao = styled.View`
  
    border: 1px solid #00000000;
    border-bottom-color: #cecece; 
    padding-bottom: 10px;
    /* width: 100%;
    height: 40px; */
`;