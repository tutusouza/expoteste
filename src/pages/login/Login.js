import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, processColor, TextInput } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    withTiming,
    interpolateColor,
} from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from '../welcome/Slide';
import SubsSlide from '../welcome/SubsSlide';
import Button from '../../components/Button';
import { TitleLogin, InputText } from './StyledLogin';
const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;
const slides = [
    {
        title: '',
        color: processColor('#BFEAF5'),
        subtitle: '',
        description: '',
        picture: require('../../images/login.png'),
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

const Login = ({ navigation }) => {
    const scrollRef = useRef(null);
    const x = useSharedValue(0);
    const [login, setLogin] = useState('');
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            // console.log( event.contentOffset.x );
            const index = Math.round(event.contentOffset.x / width);
            x.value = event.contentOffset.x;
        },
    });

    const styleAnimatedColor1 = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            slides.map((_, i) => width * i),
            slides.map((i) => i.color),
        );
        return { backgroundColor };
    });

    const styleAnimatedColor2 = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            slides.map((_, i) => width * i),
            slides.map((i) => i.color),
        );
        return { backgroundColor };
    });

    const styleAnimatedFooter = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value * -1,
                },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, styleAnimatedColor1, { backgroundColor: '#9898' }]}>
                <Animated.ScrollView
                    ref={scrollRef}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    onScroll={scrollHandler}
                >
                    {slides.map(({ title, picture, subtitle }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                {/* <Animated.View style={[styles.background, styleAnimatedColor2]} /> */}
                <View style={[styles.footerContent]}>
                    {/* <View style={{ flex: 1, backgroundColor: 'red', padding: 40 }}> */}
                    <TitleLogin>Usuário</TitleLogin>
                    <InputText value={login} onChange={(event) => setLogin(event.target.value)} placeholder="Login" />
                    <TitleLogin>Senha</TitleLogin>
                    <InputText value={login} onChange={(event) => setLogin(event.target.value)} placeholder="Senha" />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            onPress={() => {
                                navigation.push('Home');
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
/*
<Animated.View style={[styleAnimatedFooter, { width: width * slides.length, flex: 1, flexDirection: 'row' }]}>
                        {slides.map(({ subtitle, description }, index) => (
                            <SubsSlide
                                onPress={() => {
                                    if (scrollRef.current) {
                                        scrollRef.current.scrollTo({ x: width * (index + 1), animated: true });
                                        if (index === slides.length - 1) navigation.push('Home');
                                    }
                                }}
                                key={index}
                                last={index === slides.length - 1}
                                {...{ subtitle, description }}
                            />
                        ))}
                    </Animated.View>

*/
