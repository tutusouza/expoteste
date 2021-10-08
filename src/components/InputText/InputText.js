import React, { useState } from 'react';
import { View } from 'react-native';
import { TitleLogin, InputText } from './StyledInputText';

const InputTextComponent = ({ label }) => {
    const [string, setString] = useState('');
    const [focus, setFocus] = useState(false);

    return (
        <View style={{ marginTop: 10 }}>
            <TitleLogin focus={focus}>{label}</TitleLogin>
            <InputText
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                value={string}
                focus={focus}
                onChange={(event) => setString(event.target.value)}
                placeholder={label}
            />
        </View>
    );
};

export default InputTextComponent;
