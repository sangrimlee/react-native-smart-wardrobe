import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header, Recommendation } from "../Components";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="Home" />
            <ScrollView style={styles.mainContainer}>
                <Recommendation />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
