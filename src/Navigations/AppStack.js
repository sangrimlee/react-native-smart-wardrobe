import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";
import { Item } from "../Screens/Components";
import Category from "../Screens/WardrobeScreen";
const Stack = new createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={AppNavigation} />
            <Stack.Screen name="Item" component={Item} />
            <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
    );
};

export default AppStack;
