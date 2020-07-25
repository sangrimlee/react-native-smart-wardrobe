import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "../../Components";

const { width, height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "#FA6400",
                        borderBottomRightRadius: 75,
                    }}
                />
            </View>
            <View style={styles.centerContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Let's get started</Text>
                        <Text style={styles.description}>
                            Login to your account below or signup for an amazing
                            experience.
                        </Text>
                    </View>
                    <Button
                        label={"Have an account? Login"}
                        variant={"primary"}
                        onPress={() => navigation.navigate("Login")}
                        style={{ marginBottom: 16 }}
                    />
                    <Button
                        label={"Join us, It's Free"}
                        onPress={() => navigation.navigate("Signup")}
                        style={{ marginBottom: 16 }}
                        // onPress={props.onPress}
                    />
                    <Button
                        label={"Forgot password?"}
                        style={{ marginBottom: 16 }}
                        // onPress={props.onPress}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    topContainer: {
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        backgroundColor: "#FA6400",
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 75,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: { textAlign: "center" },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginTop: 12,
        marginBottom: 16,
        color: "#0C0D34",
        textAlign: "center",
    },
    description: {
        fontFamily: "SFPro-Text-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 32,
        textAlign: "center",
        width: 320,
        opacity: 0.5,
    },
});

export default Welcome;
