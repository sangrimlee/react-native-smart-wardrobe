import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components";

const SubSlide = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Button
                label={props.last ? "Let's get started" : "Continue"}
                variant={props.last ? "primary" : "default"}
                onPress={props.onPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 48,
    },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginTop: 12,
        marginBottom: 16,
        color: "#0C0D34",
    },
    description: {
        fontFamily: "SFPro-Text-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 32,
    },
});

export default SubSlide;
