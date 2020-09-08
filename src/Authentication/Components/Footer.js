import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SocialLogin from "./SocialLogin";

const Footer = ({ navigation, navigate, label, btnLabel }) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            <View style={styles.mainContainer}>
                <SocialLogin />
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 16,
                    }}
                    onPress={() => navigation.navigate(navigate)}
                >
                    <Text style={{ color: "#2c2c2c", marginRight: 16 }}>
                        {label}
                    </Text>
                    <Text style={{ color: "#FA6400" }}>{btnLabel}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#AAA",
        width: "90%",
    },
    mainContainer: {
        paddingVertical: 32,
        marginBottom: 16,
    },
});

export default Footer;
