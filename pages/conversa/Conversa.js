import React, { useState, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { View, Text, Platform, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';

const Conversa = ( { route, navigation } ) => {
    const { idSala } = route.params;
    const [ messages, setMessages ] = useState( [] );
    const [ count, setCount ] = useState( 0 );

    useEffect( () => {
        setMessages( _tempmensagens );
    }, [] );

    useLayoutEffect( () => {
        navigation.setOptions( {
            header: ( ...a ) => {
                return <AppBarCustom data={ idSala } />;
            }

            // headerTitle: idSala.title || 'Conversa',
            // headerRight: () => (
            //     <SimpleLineIcons name="menu" size={ 20 } color="#fff" />
            // ),
        } );
    }, [ navigation, route ] );

    const onSend = useCallback( ( messages = [] ) => {
        setMessages( previousMessages => GiftedChat.append( previousMessages, messages ) );
    }, [] );

    return (
        <View style={ styles.Background }>
            <View style={ styles.ContainerMensagens }>
                <GiftedChat
                    messages={ messages.map( ( item, index ) => ( { ...item, _id: index } ) ) }
                    onSend={ messages => onSend( messages ) }
                    placeholder="Escreva aqui..."
                    // renderAccessory={Platform.OS === 'web' ? null : this.renderAccessory}
                    user={ {
                        _id: 1,
                        name: 'Artur Garia',
                        avatar: 'https://placeimg.com/140/140/any',
                    } }
                />

            </View>

        </View>
    );

};

export default Conversa;

const styles = StyleSheet.create( {
    Background: {
        flex: 1,
        backgroundColor: '#03DAC6',
    },
    ContainerMensagens: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    top: {
        backgroundColor: 'red',
        height: 30,
        backgroundColor: '#02b7a6',
    },
    container: {
        height: 56,
        backgroundColor: '#03DAC6',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16
    },
    ContainerHead: {
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        fontSize: 20,
        letterSpacing: 0.15
    },
} );

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

function AppBarCustom ( { data } ) {
    const [ open, setOpen ] = useState( false );

    const tamanhoBar = useMemo( () => {
        if ( open )
            return 112;
        return 56;
    }, [ open ] );

    return (
        <SafeAreaView>
            { Platform.OS !== 'ios' && (
                <View style={ styles.top }>
                </View>
            ) }
            <View style={ [ styles.container, { height: tamanhoBar } ] }>
                <View style={ styles.ContainerHead }>
                    <AntDesign name="arrowleft" size={ 24 } color="black" />
                    <TouchableOpacity onPress={ () => setOpen( !open ) } >
                        <Text style={ styles.text }>{ data.title }</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}