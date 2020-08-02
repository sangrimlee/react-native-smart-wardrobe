import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    HomeScreen,
    LikeScreen,
    ProfileScreen,
    WardrobeScreen,
} from "../Screens";

const Tab = new createBottomTabNavigator();

const Icon = (props) => {
    return <MaterialCommunityIcons {...props} />;
};

const marginBottom = Platform.OS === "android" ? 24 : 0;

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
            // TODO : Iphone 6,7,8 대응
            tabBarOptions={{
                activeTintColor: "#FA6400",
                inactiveTintColor: "#EAEAEA",
                showLabel: false,
                style: {
                    paddingHorizontal: 16,
                    marginHorizontal: 16,
                    borderRadius: 100,
                    height: 72,
                    marginBottom: marginBottom,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
            <Tab.Screen name="Like" component={LikeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigation;
