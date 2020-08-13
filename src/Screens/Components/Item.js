import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Header from "./Header";

const { width, height } = Dimensions.get("window");

const Divider = () => {
    return (
        <View
            style={{
                borderWidth: 0.5,
                marginVertical: 8,
                borderBottomColor: "#2C2C2C",
            }}
        />
    );
};

const Attribute = ({ label, value }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Text style={styles.category}>{label}</Text>
            <Text style={styles.category}>{value}</Text>
        </View>
    );
};

const Item = ({ route, navigation }) => {
    const [isEditable, setEditable] = useState(false);
    const { imageUrl, title, category } = route.params;
    return (
        <View style={styles.container}>
            <Image
                style={styles.underLay}
                source={{
                    uri: `${imageUrl}`,
                }}
                resizeMode="cover"
            />
            <Header navigation={navigation} item />
            <View style={{ height: height * 0.4 }}></View>
            <View style={styles.detailContainer}>
                {/* <Text style={styles.title} numberOfLines={3}>
                    {title}
                </Text>
                <Divider />
                <Attribute label="카테고리" value={category} />
                <Attribute label="색상" value="블랙" /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    underLay: {
        ...StyleSheet.absoluteFillObject,
        height: height * 0.65,
    },
    detailContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 32,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 72,
        borderTopRightRadius: 72,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontFamily: "SFPro-Text-Bold",
        width: width - 48,
        fontSize: 18,
        color: "#2C2C2C",
        marginBottom: 4,
    },
    category: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 15,
        color: "#2C2C2C",
    },
});

export default Item;
