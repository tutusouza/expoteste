import React, { useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, processColor } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    withTiming,
    interpolateColor
} from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import SubsSlide from './SubsSlide';

const { width } = Dimensions.get( 'window' );
const BORDER_RADIUS = 75;
const slides = [
    {
        title: 'Seguro',
        color: processColor( "#BFEAF5" ),
        subtitle: 'Criptografia 256 bits',
        description: 'Sua conversa esta segura com uma criotografia de 256 bits.',
        picture: require( '../../images/seguro.png' )
    },
    {
        title: 'Prático',
        color: processColor( "#BEECC4" ),
        subtitle: 'Fale Com Seu Medico',
        description: 'Suas conversas com seus medicos em um só lugar',
        picture: require( '../../images/pratico.png' )
    },
    {
        title: 'Responsável',
        color: processColor( "#FFE4D9" ),
        subtitle: 'Restrição de Horário',
        description: 'Bloqueio de horario para o chat, seu medico merece descançar',
        picture: require( '../../images/responsavel.png' )
    },
];

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    footerContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderTopLeftRadius: BORDER_RADIUS,
        overflow: 'hidden'
    }
} );

const Welcome = ( { navigation } ) => {
    const scrollRef = useRef( null );
    const x = useSharedValue( 0 );

    const scrollHandler = useAnimatedScrollHandler( {
        onScroll: ( event ) => {
            // console.log( event.contentOffset.x );
            const index = Math.round( event.contentOffset.x / width );
            x.value = event.contentOffset.x;
        },
    } );

    const styleAnimatedColor1 = useAnimatedStyle( () => {
        const backgroundColor = interpolateColor(
            x.value,
            slides.map( ( _, i ) => width * i ),
            slides.map( i => i.color )
        );
        return { backgroundColor };
    } );

    const styleAnimatedColor2 = useAnimatedStyle( () => {
        const backgroundColor = interpolateColor(
            x.value,
            slides.map( ( _, i ) => width * i ),
            slides.map( i => i.color )
        );
        return { backgroundColor };
    } );

    const styleAnimatedFooter = useAnimatedStyle( () => {
        return {
            transform: [
                {
                    translateX: x.value * -1,
                },
            ],
        };
    } );

    return (
        <View style={ styles.container }>
            <Animated.View style={ [ styles.slider, styleAnimatedColor1 ] }>
                <Animated.ScrollView
                    ref={ scrollRef }
                    horizontal
                    snapToInterval={ width }
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={ false }
                    bounces={ false }
                    scrollEventThrottle={ 1 }
                    onScroll={ scrollHandler }
                >
                    { slides.map( ( { title, picture, subtitle }, index ) => (
                        <Slide key={ index } right={ !!( index % 2 ) }  { ...{ title, picture } } />
                    ) ) }
                </Animated.ScrollView>
            </Animated.View>
            <View style={ styles.footer }>
                <Animated.View style={ [ styles.background, styleAnimatedColor2 ] } />
                <View style={ [ styles.footerContent ] }>
                    <Animated.View style={ [ styleAnimatedFooter, { width: width * slides.length, flex: 1, flexDirection: 'row' } ] }>
                        { slides.map( ( { subtitle, description }, index ) => (
                            <SubsSlide
                                onPress={ () => {
                                    if ( scrollRef.current ) {
                                        scrollRef.current.scrollTo( { x: width * ( index + 1 ), animated: true } );
                                        if ( index === ( slides.length - 1 ) )
                                            navigation.push( 'Home' );
                                    }
                                } }
                                key={ index }
                                last={ index === ( slides.length - 1 ) }
                                { ...{ subtitle, description } }
                            />
                        ) ) }

                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Welcome;