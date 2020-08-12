import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Header } from "../Components";
import Category from "./Category";

const Tab = createMaterialTopTabNavigator();

const WardrobeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="Wardrobe" />
            <View style={styles.wardrobeContainer}>
                <Tab.Navigator
                    initialRouteName="All"
                    tabBarOptions={{
                        labelStyle: {
                            fontFamily: "SFPro-Text-Semibold",
                            textTransform: "capitalize",
                            fontSize: 14,
                            shadowColor: "#2C2C2C",
                            shadowOffset: {
                                width: 0,
                                height: 0.5,
                            },
                            shadowOpacity: 0.05,
                            shadowRadius: 1.5,

                            elevation: 1,
                        },
                        activeTintColor: "#2C2C2C",
                        inactiveTintColor: "#AAA",

                        scrollEnabled: true,
                        style: {
                            height: 48,
                            elevation: 0,
                            backgroundColor: "transparent",
                        },
                        tabStyle: {
                            width: 80,
                        },
                        indicatorStyle: {
                            width: 6,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "#2C2C2C",
                            position: "relative",
                            left: 37,
                            top: 40,
                        },
                    }}
                >
                    <Tab.Screen name="전체" component={Category} />
                    <Tab.Screen name="아우터" component={Category} />
                    <Tab.Screen name="상의" component={Category} />
                    <Tab.Screen name="하의" component={Category} />
                    <Tab.Screen name="기타" component={Category} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wardrobeContainer: {
        flex: 1,
        marginTop: 16,
    },
});

export default WardrobeScreen;
