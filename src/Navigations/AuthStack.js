import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Onboarding,
    Welcome,
    Login,
    Signup,
    ForgotPassword,
} from "../Authentication";

const Stack = new createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default AuthStack;
