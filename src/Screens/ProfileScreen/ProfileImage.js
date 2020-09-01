import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddProfileImage = () => {
    return (
        <View
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
        >
            <Icon
                style={{ marginLeft: 0.5 }}
                name="plus"
                color="#fff"
                size={20}
            />
        </View>
    );
};

const ProfileImage = () => {
    const [profileImageUrl, setProfileImageUrl] = useState(
        "https://i.ibb.co/pXknZCC/Profile-Image.jpg"
    );
    useEffect(() => {
        const { uid } = firebase.auth().currentUser;
        const ref = firebase.storage().ref().child(`${uid}/profile.jpg`);
        ref.getDownloadURL()
            .then(function (url) {
                setProfileImageUrl(url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const uploadImage = async (uri) => {
        const { uid } = firebase.auth().currentUser;
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`${uid}/profile.jpg`);
        ref.put(blob);
        ref.getDownloadURL()
            .then(function (url) {
                setProfileImageUrl(url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            uploadImage(pickerResult.uri);
        } else {
            console.log(pickerResult);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => openImagePickerAsync()}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: profileImageUrl,
                    }}
                />
                <AddProfileImage />
            </TouchableOpacity>
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
