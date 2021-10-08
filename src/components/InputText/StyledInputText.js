import styled from 'styled-components';

export const TitleLogin = styled.Text`
    font-size: 16px;
    color: ${(p) => (!p.focus ? '#333333' : '#5E4AE3')};
    font-weight: 700;
`;

export const InputText = styled.TextInput`
    display: flex;
    flex: 1;
    max-height: 30px;
    min-height: 30px;
    margin: 0 0 12px 0;
    border-width: 1px;
    padding: 3px;
    color: ${(p) => (!p.focus ? '#333333' : '#5E4AE3')};
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-color: ${(p) => (!p.focus ? '#333333' : '#5E4AE3')};
`;
