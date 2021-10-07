import React, { useState } from 'react';
import { View, Dimensions, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styles, { _heightBodyApp } from './stylesTopBar';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons, Foundation } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const configAnim = {
    damping: 500,
    stiffness: 1000,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
};

const TopBar = ( { children, data } ) => {
    const [ topBarIsOpen, setTopBarIsOpen ] = useState( false );
    const navigation = useNavigation();
    const translateY = useSharedValue( 0 );
    const opacity = useSharedValue( 1 );

    const animateTranslateYBody = useAnimatedStyle( () => ( {
        transform: [ { translateY: translateY.value } ]
    } ) );

    const animateOpacienty = useAnimatedStyle( () => ( {
        opacity: opacity.value
    } ) );


    const onDubleTapEvent = ( event ) => {
        if ( event.nativeEvent.state === State.ACTIVE ) {
            if ( topBarIsOpen ) {
                translateY.value = withSpring( 0, configAnim );
                opacity.value = withSpring( 1, configAnim );
                setTopBarIsOpen( false );
            }
        }
    };

    const closeOrOpenTopBar = () => {
        setTopBarIsOpen( old => !old );
        if ( translateY.value > 0 ) {
            translateY.value = withSpring( 0, configAnim );
            opacity.value = withSpring( 1, configAnim );
        } else {
            translateY.value = withSpring( _heightBodyApp - 100 );
            opacity.value = withSpring( 0, configAnim );
        }
    };

    return (
        <View style={ styles.Container }>
            <StatusBar backgroundColor={ "#4637a9" } />
            <View style={ styles.ContainerHeaderPage }>
                <View style={ styles.ContainerHeadTitle }>
                    { topBarIsOpen ?
                        <>
                            <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar }>
                                <AntDesign name="close" size={ 24 } color="#fff" />
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <TouchableOpacity onPress={ () => navigation.goBack() } >
                                <AntDesign name="arrowleft" size={ 24 } color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar } >
                                <UserAvatar
                                    name={ `${ data.first_name } ${ data.last_name }` }
                                    src={ data.photo }
                                    style={ styles.avatar }
                                />
                                <Text style={ styles.text }>
                                    { `${ data.gender === "F" ? "Dra." : "Dr." } ${ data.first_name } ${ data.last_name }` }
                                </Text>
                            </TouchableOpacity>

                            <View style={ styles.containerOptions }>
                                <TouchableOpacity style={ styles.marginHorizontalT }  >
                                    <Foundation name="alert" size={ 24 } color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={ closeOrOpenTopBar } >
                                    <SimpleLineIcons name="options-vertical" size={ 24 } color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>

                <View style={ styles.ContainerHeadBody }>
                    <ScrollView style={ styles.HeadBody }>
                        <View style={ { alignItems: 'center', paddingTop: 25 } }>
                            <View style={ styles.containerAvatarXL }>
                                <UserAvatar
                                    name={ `${ data.first_name } ${ data.last_name }` }
                                    size={ 80 }
                                    borderRadius={ 40 }
                                    src={ data.photo }
                                />
                            </View>
                            <Text style={ styles.myName }>{ `${ data.gender === "F" ? "Dra." : "Dr." } ${ data.first_name } ${ data.last_name }` }</Text>
                        </View>

                        <View style={ styles.containerCallOptions }>

                            <TouchableOpacity style={ styles.itemContainerCallOptions }>
                                <View style={ styles.containerIconeItemMenu }>
                                    <Foundation name="alert" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                                </View>
                                <View style={ styles.containerTextoItemMenu }>
                                    <Text style={ styles.textoItemMenu }>Alerta </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.itemContainerCallOptions }>
                                <View style={ styles.containerIconeItemMenu }>
                                    <MaterialCommunityIcons name="video" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />

                                </View>
                                <View style={ styles.containerTextoItemMenu }>
                                    <Text style={ styles.textoItemMenu }>Video </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.itemContainerCallOptions }>
                                <View style={ styles.containerIconeItemMenu }>
                                    <MaterialCommunityIcons name="bell" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                                </View>
                                <View style={ styles.containerTextoItemMenu }>
                                    <Text style={ styles.textoItemMenu }>Silenciar </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <AntDesign name="picture" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />

                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Fotos, vídeos e documentos </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <AntDesign name="search1" size={ 24 } color="black" color="#fff" style={ styles.iconeItemMenu } />

                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Procurar na conversa</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <MaterialCommunityIcons name="bell-outline" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Sons e notificações</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <AntDesign name="lock" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Bloquear contato</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <MaterialCommunityIcons name="trash-can-outline" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Excluir contato</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <AntDesign name="dislike2" size={ 24 } color="#fff" style={ styles.iconeItemMenu } />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Denunciar contato</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>


            <TapGestureHandler onHandlerStateChange={ onDubleTapEvent } numberOfTaps={ 2 }>
                <Animated.View style={ [ styles.ContainerBodyPage, animateTranslateYBody ] } >
                    <View style={ styles.ContainerHeaderPage } >
                        { children }
                    </View>
                </Animated.View>
            </TapGestureHandler>
        </View>
    );
};

export default TopBar;


