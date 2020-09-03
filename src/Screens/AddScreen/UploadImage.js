import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UploadImage = () => {
    return (
        <View style={styles.container}>
            <Text>UploadImage</Text>
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

export default UploadImage;
