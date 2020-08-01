import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../Components";
import * as firebase from "firebase";

const SignOutButton = () => {
    const signOutUser = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("Sign Out"))
            .catch((err) => console.log(err));
    };
    return <Button label="Sign Out" variant="primary" onPress={signOutUser} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SignOutButton;
