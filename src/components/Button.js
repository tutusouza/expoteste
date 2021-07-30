import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create( {
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
    },
    label: {
        fontSize: 15,
        textAlign: 'center'
    }
} );

const Button = ( { variant, label, onPress } ) => {
    const backgroundColor = variant === 'primary' ? '#5E4AE3' : 'rgba(12,13,52, .05)';
    const color = variant === 'primary' ? '#fff' : '#0C0D34';

    return (
        <RectButton style={ [ styles.container, { backgroundColor } ] } { ...{ onPress } }>
            <Text style={ [ styles.label, { color } ] }>{ label }</Text>
        </RectButton>
    );
};

export default Button;