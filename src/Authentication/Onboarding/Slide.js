import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ right, label, picture }) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.underLay}>
                <Image
                    source={picture}
                    style={styles.picture}
                    resizeMode="contain"
                />
            </View>

            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
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
    underLay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    picture: {
        width: (width * 2) / 3,
    },
});

export default Slide;
