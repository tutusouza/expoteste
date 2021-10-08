import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, processColor, TextInput, Image, Text } from 'react-native';
import InputTextComponent from '../../components/InputText/InputText';
import Button from '../../components/Button';
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;

const stylesSlider = StyleSheet.create({
    container: {
        width,
        height: width,
        backgroundColor: '#BFEAF5',
    },
    containerTitle: {
        height: 100,
        justifyContent: 'center',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        height: width - 100,
        width: width - 100,
    },
    title: {
        fontSize: 50,
        lineHeight: 50,
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
        height: SLIDE_HEIGHT - 90,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    footerContent: {
        justifyContent: 'flex-start',
        padding: 40,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderTopLeftRadius: BORDER_RADIUS,
        overflow: 'hidden',
    },
});

const transform = [{ translateY: (SLIDE_HEIGHT - 100) / 2 }, { translateX: -width / 2 + 30 }, { rotate: '90deg' }];

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.slider, backgroundColor: '#BFEAF5' }}>
                <View style={stylesSlider.container}>
                    <View style={stylesSlider.underlay}>
                        <Image source={require('../../images/login.png')} style={stylesSlider.picture} />
                    </View>
                    <View style={[stylesSlider.containerTitle, { transform }]}>
                        <Text style={stylesSlider.title}>Login</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={[styles.footerContent]}>
                    <InputTextComponent label="Login" />
                    <InputTextComponent label="Senha" />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            onPress={() => {
                                navigation.push('Welcome');
                            }}
                            label="Acessar"
                            variant="primary"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Login;