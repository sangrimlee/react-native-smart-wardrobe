import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const aspectRatio = 1536 / 2048;
const imageHeight = width * aspectRatio;
const rightRadius = {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 0,
};
const leftRadius = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 75,
};
const centerRadius = {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
};

const Container = ({ children, footer, right, center }) => {
    const insets = useSafeAreaInsets();
    const borderRadius = center
        ? centerRadius
        : right
        ? rightRadius
        : leftRadius;
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View
                style={{
                    backgroundColor: "white",
                }}
            >
                <View
                    style={{
                        ...styles.headerContainer,
                        borderBottomLeftRadius:
                            borderRadius.borderBottomLeftRadius,
                        borderBottomRightRadius:
                            borderRadius.borderBottomRightRadius,
                    }}
                >
                    <Image
                        source={require("../../assets/pattern.png")}
                        style={{
                            width: width,
                            height: imageHeight,
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
                <View
                    style={{
                        ...styles.mainContainer,
                        borderTopLeftRadius: borderRadius.borderTopLeftRadius,
                        borderTopRightRadius: borderRadius.borderTopRightRadius,
                    }}
                >
                    {children}
                </View>
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
    },
    bodyContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 75,
        marginBottom: 24,
    },
    footerContainer: {
        backgroundColor: "#0c0d34",
    },
});

export default Container;
