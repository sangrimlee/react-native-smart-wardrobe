import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "./src/Authentication";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fonts = {
    "SFPro-Text-Bold": require("./assets/fonts/SF-Pro-Bold.otf"),
    "SFPro-Text-Semibold": require("./assets/fonts/SF-Pro-Semibold.otf"),
    "SFPro-Text-Regular": require("./assets/fonts/SF-Pro-Regular.otf"),
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
        </AuthenticationStack.Navigator>
    );
};

export default function App() {
    let [isLoaded] = Font.useFonts(fonts);
    if (!isLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
    );
}
