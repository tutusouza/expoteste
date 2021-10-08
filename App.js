import "react-native-gesture-handler";
import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import HomeScreen from "./src/pages/home/Home";
import ConversaScreen from "./src/pages/conversa/Conversa";
import WelcomeScreen from "./src/pages/welcome/Welcome";
import Login from "./src/pages/login/Login";
import Signup from "./src/pages/signup/Signup";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="card"
        initialRouteName="Signup"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5E4AE3" },
          gestureDirection: "horizontal",
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Conversa"
          component={ConversaScreen}
          options={{ headerShown: false }}
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
