import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    HomeScreen,
    LikeScreen,
    ProfileScreen,
    WardrobeScreen,
} from "../Screens";
import { AddButton } from "../Components";

const Tab = new createBottomTabNavigator();

const AddScreen = () => {
    return null;
};
const Icon = (props) => {
    return <MaterialCommunityIcons {...props} style={{ marginTop: 8 }} />;
};
const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === "Home") {
                        return <Icon name="home" size={size} color={color} />;
                    } else if (route.name === "Wardrobe") {
                        return (
                            <Icon
                                name="tshirt-crew"
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === "Add") {
                        return <AddButton />;
                    } else if (route.name === "Like") {
                        return <Icon name="heart" size={size} color={color} />;
                    } else if (route.name === "Profile") {
                        return (
                            <Icon name="account" size={size} color={color} />
                        );
                    }
                    return <Icon />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "#FA6400",
                inactiveTintColor: "#EAEAEA",
                showLabel: false,
                style: {
                    paddingHorizontal: 16,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Like" component={LikeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigation;
