import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { TextButton } from "../../Components";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddImageButton = ({ onChangeImage }) => {
    const [imageUrl, setImageUrl] = useState("");

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (!pickerResult.cancelled) {
            setImageUrl(pickerResult.uri);
            onChangeImage(imageUrl);

            // uploadImage(pickerResult.uri);
        } else {
            console.log(pickerResult);
        }
    };

    return (
        <View style={styles.container}>
            {imageUrl ? (
                <TouchableOpacity
                    style={styles.imgContainer}
                    onPress={() => openImagePickerAsync()}
                >
                    <Image
                        source={{
                            uri: `${imageUrl}`,
                        }}
                        style={styles.img}
                    />
                </TouchableOpacity>
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => openImagePickerAsync()}
                    >
                        <Icon
                            style={styles.icon}
                            name="tshirt"
                            size={64}
                            color="#EAEAEA"
                        />
                    </TouchableOpacity>
                    <TextButton
                        label="사진 추가"
                        color="#FA6400"
                        onPress={() => openImagePickerAsync()}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c2c2c",
        marginVertical: 8,
    },
    imgContainer: { width: 160, height: 160, marginTop: 8, marginBottom: 16 },
    img: {
        width: 160,
        height: 160,
        borderRadius: 80,
    },
});

export default AddImageButton;
