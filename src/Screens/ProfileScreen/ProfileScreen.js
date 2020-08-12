import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileImage from "./ProfileImage";
import SignOutButton from "./SignOutButton";
import { Header } from "../Components";
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.imageContainer}>
                <ProfileImage imageUrl={null} />
            </View>
            <View style={styles.menuContainer}>
                <SignOutButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    menuContainer: {
        flex: 3,
        alignItems: "center",
    },
});

export default ProfileScreen;
