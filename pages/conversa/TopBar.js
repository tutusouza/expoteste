import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get( 'window' );
const _heightBodyApp = height - 80;
const _heightHeadTitle = 56;
const primaryColor = '#03DAC6';

const TopBar = ( { children, data } ) => {
    const [ topBarIsOpen, setTopBarIsOpen ] = useState( false );
    const navigation = useNavigation();
    const translateY = useSharedValue( 0 );

    const animateStyles = useAnimatedStyle( () => ( {
        transform: [ { translateY: translateY.value } ]
    } ) );

    return (
        <View style={ styles.Container }>
            <View style={ styles.ContainerHeaderPage }>
                <StatusBar backgroundColor={ "#01af9f" } />
                <View style={ styles.ContainerHeadTitle }>
                    { !topBarIsOpen ? <TouchableOpacity
                        style={ styles.InfosContact }
                        onPress={ () => {
                            navigation.goBack();
                        } }
                    >
                        <AntDesign name="arrowleft" size={ 24 } color="#fff" />
                    </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={ styles.InfosContact }
                            onPress={ () => {
                                translateY.value = withSpring( 0 );
                                setTopBarIsOpen( false );
                            } }
                        >
                            <AntDesign name="close" size={ 24 } color="#fff" />
                        </TouchableOpacity> }
                    <TouchableOpacity
                        style={ styles.InfosContact }
                        onPress={ () => {
                            setTopBarIsOpen( old => !old );
                            translateY.value = translateY.value > 0 ? withSpring( 0 ) : withSpring( _heightBodyApp - 100 );
                        } }
                    >
                        <UserAvatar name={ data.title } style={ styles.avatar } />
                        <Text style={ styles.text }>{ data.title }</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.ContainerHeadBody }>
                    <Text style={ styles.text }>Aqui voce verá os dados do usuario</Text>
                </View>
            </View>
            <Animated.View style={ [ styles.ContainerBodyPage, animateStyles ] } >
                <View style={ styles.ContainerHeaderPage } >
                    {/* { !topBarIsOpen && (
                        <TouchableOpacity
                            style={ styles.closeTopBarContainer }
                            onPress={ () => { setTopBarIsOpen( old => !old ); translateY.value = withSpring( 0 ); } }
                        >
                            <AntDesign name="doubleright" size={ 16 } color="black" />

                        </TouchableOpacity>
                    ) } */}
                    { children }

                </View>
            </Animated.View>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create( {
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
        flex: 1
    },
    ContainerHeadTitle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        height: _heightHeadTitle,
    },
    InfosContact: {
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        fontSize: 22,
        letterSpacing: 0.15,
        marginLeft: 10,
    },
    avatar: {
        marginLeft: 10,
    },
    closeTopBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    ContainerHeadBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
} );