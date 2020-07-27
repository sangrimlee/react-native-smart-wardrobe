import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const Checkbox = ({ label, onChange, checked }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onChange()}>
            <Icon
                name={checked ? "check-box" : "check-box-outline-blank"}
                color="#FA6400"
                size={20}
                style={styles.checkbox}
            />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        marginRight: 4,
    },
    label: {
        fontFamily: "SFPro-Text-Regular",
        fontSize: 14,
    },
});

export default Checkbox;
