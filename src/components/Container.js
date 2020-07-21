import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const aspectRatio = 1536 / 2048;
const imageHeight = width * aspectRatio;

const Container = ({ children, footer }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View
                style={{
                    backgroundColor: "white",
                }}
            >
                <View style={styles.headerContainer}>
                    <Image
                        source={require("../../assets/pattern.png")}
                        style={{
                            width: width,
                            height: imageHeight,
                            borderBottomLeftRadius: 75,
                        }}
                    />
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Image
                    source={require("../../assets/pattern.png")}
                    style={{
                        width: width,
                        height: imageHeight,
                        ...StyleSheet.absoluteFillObject,
                    }}
                />
                <View style={styles.mainContainer}>{children}</View>
            </View>
            <View
                style={{
                    ...styles.footerContainer,
                    paddingBottom: insets.bottom,
                }}
            >
                {footer}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c0d34",
    },
    headerContainer: {
        overflow: "hidden",
        height: imageHeight * 0.5,
        borderBottomLeftRadius: 75,
    },
    bodyContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 75,
        borderTopLeftRadius: 0,
        marginBottom: 24,
    },
    footerContainer: {
        backgroundColor: "#0c0d34",
        padding: 16,
    },
});

export default Container;
