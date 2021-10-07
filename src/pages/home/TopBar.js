import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PanGestureHandler, TapGestureHandler, State } from 'react-native-gesture-handler';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get( 'window' );
const _heightHeadTitle = 56;
const _heightBodyApp = height - _heightHeadTitle;
// const primaryColor = '#559CAD';
// const primaryColor = '#0D2149';
// const primaryColor = '#22333B';
const primaryColor = '#5E4AE3';
const topBarColor = '#4637a9';

const textColor = '#fff';

const configAnim = {
    damping: 500,
    stiffness: 1000,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
};
const logoMedGran = require( '../../images/medgran.png' );

const TopBar = ( { children, data } ) => {
    const [ topBarIsOpen, setTopBarIsOpen ] = useState( false );
    const navigation = useNavigation();
    const translateY = useSharedValue( 0 );

    const animateStyles = useAnimatedStyle( () => ( {
        transform: [ { translateY: translateY.value } ]
    } ) );

    const onSingleTapEvent = ( event ) => {
        if ( event.nativeEvent.state === State.ACTIVE ) {
            if ( topBarIsOpen ) {
                translateY.value = withSpring( 0, configAnim );
                setTopBarIsOpen( false );
            }
        }
    };

    const closeOrOpenTopBar = () => {
        setTopBarIsOpen( old => !old );
        translateY.value = translateY.value > 0 ?
            withSpring( 0, configAnim )
            :
            withSpring( _heightBodyApp - 100 );
    };

    return (
        <View style={ styles.Container }>
            <View style={ styles.ContainerHeaderPage }>
                <StatusBar backgroundColor={ topBarColor } />
                <View style={ styles.ContainerHeadTitle }>
                    { topBarIsOpen &&
                        <>
                            <TouchableOpacity style={ styles.closeButtom } onPress={ closeOrOpenTopBar } >
                                <AntDesign name="close" size={ 24 } color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar } >
                                <Text style={ styles.text }>Minhas Configurações</Text>
                            </TouchableOpacity>
                        </>
                    }
                    { !topBarIsOpen &&
                        <>
                            <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar } >
                                <View style={ styles.ContainerLogo } >
                                    <Image source={ logoMedGran } style={ { flex: 1, resizeMode: 'contain' } } />
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={ [ styles.optionButtom, styles.marginHorizontalT ] } onPress={ closeOrOpenTopBar } >
                                <FontAwesome name="search" size={ 24 } color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.optionButtom } onPress={ closeOrOpenTopBar } >
                                <SimpleLineIcons name="options-vertical" size={ 24 } color="#fff" />
                            </TouchableOpacity>
                        </>
                    }
                </View>

                <View style={ styles.ContainerHeadBody }>
                    <ScrollView style={ { flex: 1, height: '100%', } }>

                        <View style={ { alignItems: 'center', paddingTop: 25 } }>
                            <View style={ styles.containerAvatarXL }>
                                <UserAvatar
                                    name={ `${ data.first_name } ${ data.last_name }` }
                                    src={ data.photo }
                                    // style={ styles.avatarXL }
                                    size={ 80 }
                                    borderRadius={ 40 }
                                />
                            </View>
                            <Text style={ styles.myName }>{ `${ data.first_name } ${ data.last_name }` }</Text>
                        </View>

                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <MaterialCommunityIcons name="theme-light-dark" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Tema</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <Ionicons name="notifications" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Notificações</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <MaterialIcons name="security" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Privacidade</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <AntDesign name="setting" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Coinfigurações da conta</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <Ionicons name="help-circle" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Ajuda</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu }>
                            <View style={ styles.containerIconeItemMenu }>
                                <Ionicons name="document-text" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Termos e política de privacidade</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.itemMenu } onPress={ () => navigation.push( 'Welcome' ) }>
                            <View style={ styles.containerIconeItemMenu }>
                                <MaterialIcons name="logout" size={ 24 } style={ styles.iconeItemMenu } color="black" />
                            </View>
                            <View style={ styles.containerTextoItemMenu }>
                                <Text style={ styles.textoItemMenu }>Sair da conta</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
            <TapGestureHandler onHandlerStateChange={ onSingleTapEvent } numberOfTaps={ 2 }>
                <Animated.View style={ [ styles.ContainerBodyPage, animateStyles ] } >
                    <View style={ styles.ContainerHeaderPage } >
                        { children }
                    </View>
                </Animated.View>
            </TapGestureHandler>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create( {
    marginHorizontalT: {
        marginHorizontal: 5,
    },
    Container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    ContainerBodyPage: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: _heightBodyApp,
    },
    ContainerHeaderPage: {
        flex: 1,
    },

    ContainerHeadTitle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: _heightHeadTitle,
    },
    ContainerLogo: {
        height: _heightHeadTitle - 20,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    closeButtom: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    InfosContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
    },
    optionButtom: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        justifyContent: 'center',
        fontSize: 18,
        letterSpacing: 0.15,
        marginLeft: 10,
        fontWeight: '600'
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },

    ContainerHeadBody: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 100,
    },

    containerAvatarXL: {
        height: 80,
        width: 80,
        marginBottom: 10,
    },
    avatarXL: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    myName: {
        fontSize: 26,
        color: '#fff',
        fontWeight: '600'
    },
    closeTopBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: 'red',
    },
    containerIconeItemMenu: {
        marginRight: 10,
        height: 36,
        width: 36,
        backgroundColor: '#333',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconeItemMenu: {
        color: '#fff'
    },
    containerTextoItemMenu: {

    },
    textoItemMenu: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },

} );

