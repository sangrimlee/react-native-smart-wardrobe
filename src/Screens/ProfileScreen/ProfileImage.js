import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const AddProfileImage = () => {
    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    };

    return (
        <TouchableHighlight
            style={{
                flex: 1,
                height: 32,
                width: 32,
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: "#FA6400",
                borderRadius: "24",
                borderWidth: 2,
                borderColor: "#EAEAEA",
                justifyContent: "center",
                alignItems: "center",
            }}
            underlayColor="rgba(250, 100, 0, 0.5)"
            onPress={openImagePickerAsync}
        >
            <Icon
                style={{ marginLeft: 0.5 }}
                name="plus"
                color="#fff"
                size={20}
            />
        </TouchableHighlight>
    );
};

const ProfileImage = ({ imageUrl }) => {
    const profileImageUrl = imageUrl
        ? imageUrl
        : "https://i.ibb.co/pXknZCC/Profile-Image.jpg";
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{
                    uri: profileImageUrl,
                }}
            />
            <AddProfileImage />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 96,
        width: 96,
        borderRadius: 48,
    },
    profileImage: {
        height: 96,
        width: 96,
        borderRadius: 48,
    },
});

export default ProfileImage;
