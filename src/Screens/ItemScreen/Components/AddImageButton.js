import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SelectActionModal from './SelectActionModal';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Camera } from 'expo-camera';
import { useSelector } from 'react-redux';

const DeleteImageButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 8,
        top: -8,
      }}
      onPress={onPress}
    >
      <Ionicons name="ios-close" size={16} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const AddImageButton = ({ imageUrl, onChangeImage }) => {
  const [visible, setVisible] = useState(false);

  const openAlbum = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      onChangeImage(pickerResult.uri);
    }
    setVisible(false);
  };

  const openCamera = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setVisible(true)}
      >
        <Ionicons name="md-camera" size={24} color="rgba(0,0,0,0.4)" />
        <Text style={styles.buttonText}>{imageUrl ? 1 : 0}/1</Text>
      </TouchableOpacity>
      {imageUrl ? (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
          <DeleteImageButton
            onPress={() => {
              onChangeImage('');
            }}
          />
        </View>
      ) : null}

      <SelectActionModal
        visible={visible}
        onClose={() => setVisible(false)}
        onAlbum={() => openAlbum()}
        onCamera={() => openCamera()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    paddingBottom: 8,
    // alignItems: 'flex-start',
    // justifyContent: 'space-around',
  },
  buttonContainer: {
    width: 64,
    height: 72,
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  buttonText: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 4,
  },

  image: {
    width: 64,
    height: 72,
    borderRadius: 5,
    marginRight: 16,
  },
});

export default AddImageButton;
