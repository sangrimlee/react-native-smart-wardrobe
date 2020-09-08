import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextField = ({ label, value, onChangeText, onBlur }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>label</Text>
            <TextInput
                style={styles.input}
                placeholder="placeholder"
                placeholderTextColor="#AAA"
                autoCapitalize="none"
                onChangeText={() => onChangeText()}
                onBlur={() => onBlur()}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    label: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 18,
        color: "#2c2c2c",
        marginBottom: 4,
    },
    input: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 16,
        height: 48,
        borderWidth: 0.5,
        borderColor: "#AAA",
        paddingHorizontal: 16,
    },
});

export default TextField;
