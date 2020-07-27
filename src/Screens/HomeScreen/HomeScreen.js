import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import { Button } from "../../Components";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                label="Sign Out"
                onPress={() => {
                    console.log("SIGN OUT");
                    firebase.auth().signOut();
                }}
            />
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

export default HomeScreen;
