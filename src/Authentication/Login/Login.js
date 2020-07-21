import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Theme, CustomTextInput } from "../../components";

const { width, height } = Dimensions.get("window");

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "#FA6400",
                        borderBottomLeftRadius: 75,
                    }}
                />
            </View>
            <View style={styles.centerContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.textContainer}>
                        <Text
                            style={{
                                ...Theme.header,
                                marginTop: 32,
                                marginBottom: 12,
                            }}
                        >
                            Welcome back
                        </Text>
                        <Text style={{ ...Theme.body, width: 220 }}>
                            Use your credentials below and login to your account
                        </Text>
                        <CustomTextInput />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    topContainer: {
        flex: 2,
        borderBottomLeftRadius: 75,
    },
    centerContainer: {
        flex: 8,
        backgroundColor: "#FA6400",
    },
    bottomContainer: {
        flex: 3,
        backgroundColor: "#FA6400",
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 75,
        borderBottomStartRadius: 75,
        borderBottomEndRadius: 75,
    },
    textContainer: {
        alignItems: "center",
    },
    title: {
        textAlign: "center",
    },
    description: {
        textAlign: "center",
    },
});

export default Welcome;
