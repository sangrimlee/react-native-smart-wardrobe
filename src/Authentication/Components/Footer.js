import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SocialLogin from "./SocialLogin";

const Footer = ({ navigation, navigate, label, btnLabel }) => {
    return (
        <View>
            <SocialLogin />
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 16,
                }}
                onPress={() => navigation.navigate(navigate)}
            >
                <Text style={{ color: "white", marginRight: 4 }}>{label}</Text>
                <Text style={{ color: "#FA6400" }}>{btnLabel}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Footer;
