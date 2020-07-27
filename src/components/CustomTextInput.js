import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
    MaterialCommunityIcons as Icon,
    Feather as CheckIcon,
} from "@expo/vector-icons";

const CustomTextInput = ({ iconName, error, touched, ...props }) => {
    const color = !touched ? "#8A8D90" : !error ? "#5cb85c" : "#d9534f";
    const checkColor = !error ? "#5cb85c" : "#d9534f";
    return (
        <View style={[styles.container, { borderColor: color }]}>
            <Icon name={iconName} size={16} color={color} />
            <View style={{ flex: 1 }}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#8A8D90"
                    autoCapitalize="none"
                    {...props}
                />
            </View>
            {touched && (
                <View
                    style={{
                        borderRadius: 10,
                        height: 20,
                        width: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: checkColor,
                    }}
                >
                    <CheckIcon
                        name={!error ? "check" : "x"}
                        color="white"
                        size={16}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 280,
        height: 48,
        borderWidth: 0.5,
        borderRadius: 4,
        marginVertical: 8,
        paddingHorizontal: 16,
    },
    textInput: {
        paddingHorizontal: 16,
    },
});

export default CustomTextInput;
