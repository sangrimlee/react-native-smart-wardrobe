import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SocialLogin from "./SocialLogin";

const Footer = ({ navigation, signup }) => {
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
                onPress={() => navigation.navigate("Signup")}
            >
                <Text style={{ color: "white", marginRight: 4 }}>
                    Don't have an account?
                </Text>
                <Text style={{ color: "#FA6400" }}>Sign up here</Text>
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
