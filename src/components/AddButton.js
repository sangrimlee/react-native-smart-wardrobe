import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = () => {
    const sizeRef = useRef(new Animated.Value(1)).current;
    const rotateRef = useRef(new Animated.Value(0)).current;
    const rotation = rotateRef.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"],
    });

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(sizeRef, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(sizeRef, { toValue: 1, useNativeDriver: true }),
            Animated.timing(rotateRef, {
                toValue: rotateRef === 0 ? 0 : 1,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        // TODO : Animation
        <View style={styles.container}>
            <Animated.View style={styles.button}>
                <TouchableOpacity onPress={handlePress}>
                    <Animated.View
                        style={{ transform: [{ rotate: rotation }] }}
                    >
                        <Ionicons name="md-add" color="white" size={32} />
                    </Animated.View>
                </TouchableOpacity>
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
