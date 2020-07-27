import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";

const Stack = new createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={AppNavigation} />
        </Stack.Navigator>
    );
};

export default AppStack;
