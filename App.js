import 'react-native-gesture-handler';
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/home/Home';
import ConversaScreen from './src/pages/conversa/Conversa';
import WelcomeScreen from './src/pages/welcome/Welcome';

const Stack = createStackNavigator();

export default function App () {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={ {
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#03DAC6' },
				} }
			>
				<Stack.Screen
					name="Welcome"
					component={ WelcomeScreen }
					options={ { headerShown: false } }
				/>

				<Stack.Screen
					name="Home"
					component={ HomeScreen }
					options={ {
						title: 'CallMed',
					} }
				/>
				<Stack.Screen
					name="Conversa"
					component={ ConversaScreen }
					options={ { headerShown: false } }
				// options={ ( { route } ) => ( {
				// 	headerTitle: route.params.idSala.title || 'Conversa',
				// 	headerRight: () => (
				// 		<Button
				// 			onPress={ () => alert( 'This is a button!' ) }
				// 			title="Info"

				// 		/>
				// 	),

				// } ) }

				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

