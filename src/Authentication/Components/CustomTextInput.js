import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import {
    MaterialCommunityIcons as Icon,
    Feather as CheckIcon,
} from "@expo/vector-icons";

const CustomTextInput = ({ iconName, error, touched, ...props }) => {
    const color = !touched ? "#2c2c2c" : !error ? "#5cb85c" : "#d9534f";
    const checkColor = !error ? "#5cb85c" : "#d9534f";
    return (
        <View>
            <View style={[styles.container, { borderColor: color }]}>
                <Icon name={iconName} size={16} color={color} />
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="#2c2c2c"
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
                            paddingLeft: 1,
                            paddingTop: 1,
                        }}
                    >
                        <CheckIcon
                            name={!error ? "check" : "x"}
                            color="white"
                            size={14}
                        />
                    </View>
                )}
            </View>
            {error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : null}
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
    errorContainer: {
        width: 280,
        alignItems: "flex-end",
    },
    errorText: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 12,
        textAlign: "left",
        color: "black",
        opacity: 0.8,
    },
});

export default CustomTextInput;
