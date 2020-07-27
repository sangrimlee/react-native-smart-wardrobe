import React from "react";
import { View, TouchableHighlight, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = () => {
    let buttonSize = new Animated.Value(1);

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
            }),
        ]).start();
    };
    return (
        // TODO : Animation
        <View style={styles.container}>
            <Animated.View style={styles.button}>
                <TouchableHighlight underlayColor="#FA6400">
                    <Ionicons name="md-add" color="white" size={32} />
                </TouchableHighlight>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        bottom: -8,
        backgroundColor: "#FA6400",

        shadowColor: "#FA6400",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.25,
    },
});

export default AddButton;
