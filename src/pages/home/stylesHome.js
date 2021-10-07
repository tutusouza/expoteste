import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-Top: 20px;
    background-Color: #fff;
    border-top-left-radius:20px;
    border-top-right-radius:20px;

`;

export const Texto = styled.Text`
    color: #333;
    font-size: 20px;
`;

export const Contato = styled.TouchableOpacity`
    flex: 1;
    flex-direction:row;
    margin: 8px 16px;
    overflow:hidden;
    height: 50px;
`;

export const ContainerAvatar = styled.View`    
    height: 50px;
    width: 50px; 
    margin-right: 10px;
    padding: 2px;
`;
export const Avatar = styled( UserAvatar )`    
    height: 100%;
    border-radius: 23px;
`;

export const ContainerDados = styled.View`
    flex: 1;
    border: 1px solid #00000000;
    border-bottom-color: #cecece; 
    padding-bottom: 10px;
`;

export const ContainerHoraNotificacao = styled.View`
    justify-content:space-between;
    align-items:flex-end;
    border: 1px solid #00000000;
    border-bottom-color: #cecece; 
    padding-bottom:3px;
`;