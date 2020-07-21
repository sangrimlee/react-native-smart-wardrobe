import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Button = (props) => {
    const backgroundColor =
        props.variant === "primary" ? "#2CB9B0" : "rgba(12,13,52,0.05)";
    const color = props.variant === "primary" ? "white" : "#0C0D34";
    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            onPress={props.onPress}
        >
            <Text style={[styles.label, { color }]}>{props.label}</Text>
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
    },
    label: {
        fontFamily: "SFPro-Text-Medium",
        fontSize: 15,
    },
});

export default Button;
