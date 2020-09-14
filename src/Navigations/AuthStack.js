import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Onboarding,
    Welcome,
    Login,
    Signup,
    ForgotPassword,
    CheckCode,
    ResetPassword,
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
            <Stack.Screen name="CheckCode" component={CheckCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
};

export default AuthStack;
