import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home/Home';
import ConversaScreen from './pages/conversa/Conversa';
import { Button } from 'react-native';
const Stack = createStackNavigator();

export default function App () {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={ {
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#03DAC6' },
				} }
			>
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

