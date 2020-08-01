import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileImage from "./ProfileImage";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileImage imageUrl={null} />
            <Text>ProfileScreen</Text>
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

export default ProfileScreen;
