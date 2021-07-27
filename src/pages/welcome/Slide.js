import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

const { width, height } = Dimensions.get( 'window' );
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create( {
    container: {
        width
    },
    containerTitle: {
        height: 100,
        justifyContent: 'center',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture: {
        height: width - 100,
        width: width - 100,

    },
    title: {
        fontSize: 50,
        lineHeight: 50,
        fontWeight: '700',
        color: "#fff",
        textAlign: 'center'
    }
} );

const Slide = ( { title, picture, right } ) => {
    const transform = [
        { translateY: ( SLIDE_HEIGHT - 100 ) / 2 },
        { translateX: right ? ( width / 2 - 30 ) : ( -width / 2 + 30 ) },
        { rotate: right ? "-90deg" : "90deg" }
    ];
    return (
        <View style={ styles.container }>
            <View style={ styles.underlay }>
                <Image source={ picture } style={ styles.picture } />
            </View>
            <View style={ [ styles.containerTitle, { transform } ] }>
                <Text style={ styles.title }>{ title }</Text>
            </View>
        </View>
    );
};

export default Slide;