import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const assets = {
    "apple-logo": require("../../../assets/logo/apple-logo.png"),
    "g-logo": require("../../../assets/logo/g-logo.png"),
    "facebook-logo": require("../../../assets/logo/facebook-logo.png"),
};

const SocialLogin = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#000" }}
            >
                <Image
                    source={assets["apple-logo"]}
                    style={{ width: 48, height: 48, borderRadius: 24 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image
                    source={assets["g-logo"]}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image
                    source={assets["facebook-logo"]}
                    style={{ width: 48, height: 48 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
        overflow: "hidden",
    },
});

export default SocialLogin;
