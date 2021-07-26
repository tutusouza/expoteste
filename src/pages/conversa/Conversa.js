import React, { useState, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { View, Text, Platform, Button, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';
import TopBar from './TopBar';

const Conversa = ( { route, navigation } ) => {
    const { dadosSala } = route.params;
    const [ messages, setMessages ] = useState( [] );

    useEffect( () => {
        setMessages( _tempmensagens );
    }, [] );

    const onSend = useCallback( ( messages = [] ) => {
        setMessages( previousMessages => GiftedChat.append( previousMessages, messages ) );
    }, [] );

    return (
        <TopBar data={ dadosSala }>
            <View style={ styles.ContainerMensagens }>
                <GiftedChat
                    messages={ messages.map( ( item, index ) => ( { ...item, _id: index } ) ) }
                    onSend={ messages => onSend( messages ) }
                    placeholder="Escreva aqui..."
                    user={ {
                        _id: 1,
                        name: 'Artur Garia',
                        avatar: 'https://placeimg.com/140/140/any',
                    } }
                />
            </View>
        </TopBar>
    );

};

export default Conversa;

const styles = StyleSheet.create( {
    ContainerMensagens: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20
    },

} );

function AppBarCustom ( { data } ) {
    const [ open, setOpen ] = useState( false );

    const tamanhoBar = useMemo( () => {
        if ( open )
            return 112;
        return 56;
    }, [ open ] );

    return (
        <SafeAreaView>
            <StatusBar
                animated={ true }
                backgroundColor="#02b7a6"
            />
            <View style={ [ styles.container, { height: tamanhoBar } ] }>
                <View style={ styles.ContainerHead }>
                    <AntDesign name="arrowleft" size={ 24 } color="black" />
                    <TouchableOpacity onPress={ () => setOpen( !open ) } >
                        <Text style={ styles.text }>{ data.title }aaaa</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}
const _tempmensagens = [
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'Fala ai',
        createdAt: new Date(),
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: '😋 Yes',
                    value: 'yes',
                },
                {
                    title: '📷 Yes, let me show you with a picture!',
                    value: 'yes_picture',
                },
                {
                    title: '😞 Nope. What?',
                    value: 'no',
                },
            ],
        },
        user: {
            _id: 1,
            name: 'Artur',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];
