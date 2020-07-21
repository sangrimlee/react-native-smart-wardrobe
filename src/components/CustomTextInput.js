import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomTextInput = (props) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#AAAAAA"
            />
            <TextInput style={styles.textInput} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 280,
        height: 50,
        borderColor: "#AAAAAA",
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
