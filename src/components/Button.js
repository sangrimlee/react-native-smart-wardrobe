import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Button = ({ variant, onPress, label, style }) => {
    const backgroundColor =
        variant === "primary"
            ? "#FA6400"
            : variant === "transaparent"
            ? "rgba(0,0,0,0)"
            : "rgba(12,13,52,0.05)";
    const color = variant === "primary" ? "white" : "#0C0D34";
    return (
        <RectButton
            style={[styles.container, { backgroundColor }, style]}
            onPress={onPress}
        >
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 4,
    },
    label: {
        fontFamily: "SFPro-Text-Medium",
        fontSize: 15,
    },
});

export default Button;
