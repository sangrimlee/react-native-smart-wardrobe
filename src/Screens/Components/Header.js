import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome as Icon, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = ({ label, item, navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View>
            {item ? (
                <View style={{ ...styles.container, marginTop: insets.top }}>
                    <Ionicons
                        name="ios-arrow-back"
                        size={24}
                        color="#2c2c2c"
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.editContainer}>
                        <Ionicons
                            style={{ marginRight: 24 }}
                            name="md-create"
                            size={24}
                            color="#2c2c2c"
                        />
                        <Ionicons name="md-trash" size={24} color="#2c2c2c" />
                    </View>
                </View>
            ) : (
                <View style={{ ...styles.container, marginTop: insets.top }}>
                    <Icon name="search" size={20} color="#AAA" />
                    <Text style={styles.title}>{label}</Text>
                    <Icon
                        name="plus-square"
                        size={24}
                        color="#AAA"
                        onPress={() => navigation.navigate("AddScreen")}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 18,
        color: "#2C2C2C",
    },
    editContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Header;
