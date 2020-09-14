import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthUserContext, Button } from "../../Components";

const SignOutButton = () => {
    const { signOut } = useContext(AuthUserContext);

    const handleSignOut = () => {
        signOut();
    };
    return (
        <Button label="Sign Out" variant="primary" onPress={handleSignOut} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SignOutButton;
