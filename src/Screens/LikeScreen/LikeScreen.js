import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, SearchBar } from "../Components";

const LikeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LikeScreen;
