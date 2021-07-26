import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
    },
    subtitle: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: '#0c0d34',
        textAlign: 'center'

    },
    description: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: '#0c0d34',
        textAlign: 'center'
    }
} );

const SubsSlide = ( { subtitle, description, last } ) => {

    return (
        <View style={ styles.container }>
            <Text style={ styles.subtitle }>{ subtitle }</Text>
            <Text style={ styles.description }>{ description }</Text>
        </View>
    );
};

export default SubsSlide;