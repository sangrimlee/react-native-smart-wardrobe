import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = (props) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: props.right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: props.right ? "-90deg" : "90deg" },
    ];
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{props.label}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFPro-Text-Bold",
        color: "white",
        textAlign: "center",
    },
});

export default Slide;
