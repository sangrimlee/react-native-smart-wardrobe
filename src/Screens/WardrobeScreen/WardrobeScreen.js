import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WardrobeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>WardrobeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default WardrobeScreen;
