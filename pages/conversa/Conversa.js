import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { View, Text, Platform, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SimpleLineIcons } from '@expo/vector-icons';
// import { Container } from './styles';

const Conversa = ( { route, navigation } ) => {
    const { idSala } = route.params;
    const [ messages, setMessages ] = useState( [] );
    const [ count, setCount ] = useState( 0 );
  
    useEffect( () => {
        setMessages( [
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
        ] );
    }, [] );

    useLayoutEffect( () => {
        navigation.setOptions( {
            headerTitle: idSala.title || 'Conversa',
            headerRight: () => (
                <SimpleLineIcons name="menu" size={ 20 } color="#fff" />
            ),
        } );
    }, [ navigation, route ] );

    const onSend = useCallback( ( messages = [] ) => {
        setMessages( previousMessages => GiftedChat.append( previousMessages, messages ) );
    }, [] );


    return (
        <GiftedChat
            messages={ messages }
            onSend={ messages => onSend( messages ) }
            placeholder="Escreva aqui..."
            // renderAccessory={Platform.OS === 'web' ? null : this.renderAccessory}
            user={ {
                _id: 1,
                name: 'Artur Garia',
                avatar: 'https://placeimg.com/140/140/any',
            } }
        />
    );

};

export default Conversa;