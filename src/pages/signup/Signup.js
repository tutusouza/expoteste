import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, processColor, TextInput, Image, Text } from 'react-native';
import InputTextComponent from '../../components/InputText/InputText';
import Button from '../../components/Button';
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
export const TAMANHO_CONTAINER_IMAGEM = height / 3;
const BORDER_RADIUS = 75;

const stylesSlider = StyleSheet.create({
    container: {
        width,
        height: TAMANHO_CONTAINER_IMAGEM,
        backgroundColor: '#fff',
    },
    containerTitle: {
        height: 100,
        justifyContent: 'center',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFEAF5',
        borderBottomRightRadius: BORDER_RADIUS,
    },
    picture: {
        height: TAMANHO_CONTAINER_IMAGEM,
        width: TAMANHO_CONTAINER_IMAGEM,
    },
    title: {
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BFEAF5',
    },
    slider: {
        height: TAMANHO_CONTAINER_IMAGEM - height,
        borderBottomRightRadius: BORDER_RADIUS,
        backgroundColor: '#BFEAF5',
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        justifyContent: 'flex-start',
        padding: 30,
        paddingBottom: 10,
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderTopLeftRadius: BORDER_RADIUS,
        overflow: 'scroll',
        // overflow: 'hidden',
    },
    contentContainer: {
        justifyContent: 'center',
    },
});
const transform = [{ translateY: (TAMANHO_CONTAINER_IMAGEM - 100) / 2 }, { translateX: -width / 2 + 30 }, { rotate: '90deg' }];

const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.slider }}>
                <View style={stylesSlider.container}>
                    <View style={stylesSlider.underlay}>
                        <Image source={require('../../images/signup.png')} style={stylesSlider.picture} />
                    </View>
                    <View style={[stylesSlider.containerTitle, { transform }]}>
                        <Text style={stylesSlider.title}>Cadastro</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContent}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <InputTextComponent label="Nome" />
                        <InputTextComponent label="Email" />
                        <InputTextComponent label="Telefone" />
                        <InputTextComponent label="Senha" />
                        <InputTextComponent label="Senha novamente" />
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Button
                                onPress={() => {
                                    navigation.push('Welcome');
                                }}
                                label="Cadastrar"
                                variant="primary"
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Signup;
