import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
    },
});

export default Header;
