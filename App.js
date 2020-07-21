import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome, Login } from "./src/Authentication";
import * as firebase from "firebase";
import { firebaseConfig } from "./Config";

const fonts = {
    "SFPro-Text-Bold": require("./assets/fonts/SF-Pro-Bold.otf"),
    "SFPro-Text-Semibold": require("./assets/fonts/SF-Pro-Semibold.otf"),
    "SFPro-Text-Regular": require("./assets/fonts/SF-Pro-Regular.otf"),
    "SFPro-Text-Medium": require("./assets/fonts/SF-Pro-Medium.otf"),
    "SFPro-Text-Light": require("./assets/fonts/SF-Pro-Light.otf"),
};

const AuthenticationStack = new createStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen
                name="Onboarding"
                component={Onboarding}
            />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
        </AuthenticationStack.Navigator>
    );
};

export default function App() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    let [isLoaded] = useFonts(fonts);

    if (!isLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <AuthenticationNavigator />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
