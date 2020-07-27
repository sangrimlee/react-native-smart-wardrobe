import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../Screens";

const Stack = new createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AppStack;
