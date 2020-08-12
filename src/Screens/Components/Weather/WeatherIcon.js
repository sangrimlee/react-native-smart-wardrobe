import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import WeatherCondition from "./WeatherCondition";

const WeatherIcon = ({ id }) => {
    const hour = new Date().getHours();
    const iconName = `${WeatherCondition[id].icon}${
        hour > 6 && hour < 20 ? "d" : "n"
    }`;
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{
                    uri: `http://openweathermap.org/img/wn/${iconName}@4x.png`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        marginRight: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    img: {
        width: 64,
        height: 64,
    },
});

export default WeatherIcon;
