import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="#AAA"
                    autoCapitalize="none"
                />
                <Icon name="md-search" size={24} color="#AAA" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 32,
        height: 48,
        backgroundColor: "#FFF",
        borderRadius: 32,
        paddingHorizontal: 24,
    },
    textInput: {
        fontFamily: "SFPro-Text-Medium",
        fontSize: 16,
        color: "#2C2C2C",
    },
});

export default SearchBar;
