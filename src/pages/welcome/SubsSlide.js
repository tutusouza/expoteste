import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../../components/Button';

const { width } = Dimensions.get( 'window' );

const styles = StyleSheet.create( {
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
        width
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
        textAlign: 'center',
        marginBottom: 40
    }
} );

const SubsSlide = ( { subtitle, description, last, onPress } ) => {

    return (
        <View style={ styles.container }>
            <Text style={ styles.subtitle }>{ subtitle }</Text>
            <Text style={ styles.description }>{ description }</Text>
            <Button
                label={ last ? 'Ok, vamos lá' : 'Próximo' }
                variant={ last ? 'primary' : 'default' }
                { ...{ onPress } }
            />
        </View>
    );
};

export default SubsSlide;