// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { FontAwesome5 as Icon } from '@expo/vector-icons';
// import { TextButton } from '../../Components';
// import * as ImagePicker from 'expo-image-picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const AddImageButton = ({ onChangeImage }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   const openImagePickerAsync = async () => {
//     // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
//     // if (permissionResult.granted === false) {
//     //   alert('Permission to access camera roll is required!');
//     //   return;
//     // }
//     // let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     // console.log(pickerResult);
//     // if (!pickerResult.cancelled) {
//     //   setImageUrl(pickerResult.uri);
//     //   onChangeImage(imageUrl);
//     //   // uploadImage(pickerResult.uri);
//     // } else {
//     //   console.log(pickerResult);
//     // }
//   };

//   return (
//     <View style={styles.container}>
//       {imageUrl ? (
//         <TouchableOpacity
//           style={styles.imgContainer}
//           //   onPress={() => openImagePickerAsync()}
//         >
//           <Image
//             source={{
//               uri: `${imageUrl}`,
//             }}
//             style={styles.img}
//           />
//         </TouchableOpacity>
//       ) : (
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.iconContainer}
//             // onPress={() => openImagePickerAsync()}
//           >
//             <Icon style={styles.icon} name="tshirt" size={64} color="#EAEAEA" />
//           </TouchableOpacity>
//           <TextButton
//             label="사진 추가"
//             color="#FA6400"
//             // onPress={() => openImagePickerAsync()}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconContainer: {
//     width: 128,
//     height: 128,
//     borderRadius: 64,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#2c2c2c',
//     marginVertical: 8,
//   },
//   imgContainer: { width: 160, height: 160, marginTop: 8, marginBottom: 16 },
//   img: {
//     width: 160,
//     height: 160,
//     borderRadius: 80,
//   },
// });

// export default AddImageButton;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SelectActionModal from './SelectActionModal';
import * as ImagePicker from 'expo-image-picker';

import { Camera } from 'expo-camera';

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
const AddImageButton = () => {
  const [visible, setVisible] = useState(false);
  const [imageList, setImageList] = useState([]);

  const openAlbum = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (
      !pickerResult.cancelled &&
      !imageList.includes({ imageURL: pickerResult.uri })
    ) {
      const newImageList = imageList.concat({
        imageURL: pickerResult.uri,
      });
      setImageList(newImageList);
    } else {
      console.log(pickerResult);
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
        <Text style={styles.buttonText}>{imageList.length}/3</Text>
      </TouchableOpacity>
      {imageList.map((image) => {
        return (
          <View key={image.imageURL}>
            <Image
              style={styles.image}
              source={{
                uri: image.imageURL,
              }}
            />
            <DeleteImageButton
              onPress={() => {
                setImageList(
                  imageList.filter((img) => img.imageURL !== image.imageURL),
                );
              }}
            />
          </View>
        );
      })}

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
