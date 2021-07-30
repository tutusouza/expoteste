import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { PanGestureHandler, TapGestureHandler, State } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get( 'window' );
const _heightBodyApp = height - 80;
const _heightHeadTitle = 56;
const primaryColor = '#5E4AE3';
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
                <StatusBar backgroundColor={ "#4637a9" } />
                <View style={ styles.ContainerHeadTitle }>
                    { !topBarIsOpen ?
                        <TouchableOpacity style={ styles.InfosContact } onPress={ () => navigation.goBack() } >
                            <AntDesign name="arrowleft" size={ 24 } color="#fff" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar }>
                            <AntDesign name="close" size={ 24 } color="#fff" />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={ styles.InfosContact } onPress={ closeOrOpenTopBar } >
                        <UserAvatar name={ data.title } style={ styles.avatar } />
                        <Text style={ styles.text }>{ data.title }</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.ContainerHeadBody }>
                    <Text style={ styles.text }>Aqui voce verá os dados do contato</Text>
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
        paddingHorizontal: 10,
        height: _heightHeadTitle,
    },
    InfosContact: {
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


