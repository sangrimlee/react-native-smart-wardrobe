import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";

const Header = ({ label }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon name="search" size={20} color="#AAA" />
                <Text style={styles.title}>{label}</Text>
                <Icon name="bell" size={20} color="#AAA" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 48,
        marginTop: Constants.statusBarHeight,
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 18,
        color: "#2C2C2C",
    },
});

export default Header;
