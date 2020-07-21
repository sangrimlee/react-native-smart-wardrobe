import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

const assets = {
    "apple-logo": require("../../../assets/logo/apple-logo.png"),
    "g-logo": require("../../../assets/logo/g-logo.png"),
    "facebook-logo": require("../../../assets/logo/facebook-logo.png"),
};

const SocialLogin = () => {
    async function signInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId:
                    "808613271045-9ugdh1vds9lf9gl15832t0tl276di9dv.apps.googleusercontent.com",
                iosClientId:
                    "808613271045-e70dhlecpjpbroftceacbksg2id2inf0.apps.googleusercontent.com",
                scopes: ["profile", "email"],
            });

            if (result.type === "success") {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }
    async function signInWithFacebook() {
        try {
            await Facebook.initializeAsync("724437351723439");
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ["public_profile"],
            });
            if (type === "success") {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}`
                );
                Alert.alert(
                    "Logged in!",
                    `Hi ${(await response.json()).name}!`
                );
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#000" }}
                onPress={() => true}
            >
                <Image
                    source={assets["apple-logo"]}
                    style={{ width: 48, height: 48, borderRadius: 24 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => signInWithGoogle()}
            >
                <Image
                    source={assets["g-logo"]}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => signInWithFacebook()}
            >
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
