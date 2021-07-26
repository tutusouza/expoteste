import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get( 'window' );
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create( {
    container: {
        width
    },
    containerTitle: {
        // backgroundColor: 'red',
        height: 100,
        justifyContent: 'center',

    },
    title: {
        fontSize: 50,
        lineHeight: 50,
        fontWeight: '700',
        color: "#fff",
        textAlign: 'center'
    }

} );

const Slide = ( { title, right } ) => {
    const transform = [
        { translateY: ( SLIDE_HEIGHT - 100 ) / 2 },
        { translateX: right ? ( width / 2 - 30 ) : ( -width / 2 + 30 ) },
        { rotate: right ? "-90deg" : "90deg" }
    ];
    return (
        <View style={ styles.container }>
            <View style={ [ styles.containerTitle, { transform } ] }>
                <Text style={ styles.title }>{ title }</Text>
            </View>
        </View>
    );
};

export default Slide;