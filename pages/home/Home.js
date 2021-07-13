import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Contato, Texto, ContainerAvatar, ContainerDados, ContainerHoraNotificacao } from './stylesHome';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Carlos Lopes',
        lastMessage: 'Ola, qual são seus sintomas.',
        hourLastMessage: '17:30',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Artur Garcia',
        lastMessage: 'Essa dor ai é aonde?.',
        hourLastMessage: '11:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Willians Torres',
        lastMessage: 'Bom, segundo os exames de ontem, voce vai morrer em 24h.',
        hourLastMessage: '13:00',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2sd8ba',
        title: 'Lucas Paqueta',
        lastMessage: 'Ola, qual são seus sintomas.',
        hourLastMessage: '17:30',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91awea97f63',
        title: 'Maradona',
        lastMessage: 'Essa dor ai é aonde?.',
        hourLastMessage: '11:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14125571e29d72',
        title: 'Edison Arantes',
        lastMessage: 'Bom, segundo os exames de ontem, voce vai morrer em 24h.',
        hourLastMessage: '13:00',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2sxxd8ba',
        title: 'Neymar Jr',
        lastMessage: 'Ola, qual são seus sintomas.',
        hourLastMessage: '17:30',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91awea397f63',
        title: 'Barbara Paes',
        lastMessage: 'Essa dor ai é aonde?.',
        hourLastMessage: '11:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1419d72',
        title: 'Fernandinha Fernades',
        lastMessage: 'Bom, segundo os exames de ontem, voce vai morrer em 24h.',
        hourLastMessage: '13:00',
    },
];


const Home = ( { navigation } ) => {
    return (
        <Container >
            <FlatList
                data={ DATA }
                keyExtractor={ item => item.id }
                renderItem={ ( { item, onPress, style } ) => (
                    <Contato onPress={ () => navigation.push( 'Conversa', { idSala: item, } ) }>
                        <ContainerAvatar>
                            <UserAvatar name={ item.title } />
                        </ContainerAvatar>
                        <ContainerDados>
                            <Texto>{ item.title }</Texto>
                            <Texto numberOfLines={ 1 } style={ styles.textSecundary }>{ item.lastMessage }</Texto>
                        </ContainerDados>
                        <ContainerHoraNotificacao>
                            <Texto style={ styles.textSecundary }>{ item.hourLastMessage }</Texto>
                        </ContainerHoraNotificacao>
                    </Contato>
                ) }
            />
        </Container>
    );
};

export default Home;


const styles = StyleSheet.create( {
    textSecundary: {
        fontSize: 12,
        color: '#757575'
    },
} );