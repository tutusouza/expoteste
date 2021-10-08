import React, { useState } from 'react';
import { View } from 'react-native';
import { TitleLogin, InputText } from './StyledInputText';

const InputTextComponent = ({ label }) => {
    const [string, setString] = useState('');

    return (
        <View style={{ marginBottom: 10, marginTop: 10 }}>
            <TitleLogin>{label}</TitleLogin>
            <InputText value={string} onChange={(event) => setString(event.target.value)} placeholder={label} />
        </View>
    );
};

export default InputTextComponent;
