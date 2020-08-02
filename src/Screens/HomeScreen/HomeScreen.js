import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header, Recommendation } from "../Components";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="Home" />
            <View style={styles.mainContainer}>
                <Recommendation />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
    },
    title: {
        fontFamily: "SFPro-Text-Medium",
        fontSize: 16,
        marginBottom: 16,
    },
    mainContainer: {
        flex: 1,
    },
});

export default HomeScreen;
