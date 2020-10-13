import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('screen');

const SelectActionModal = ({ visible, onClose, onAlbum, onCamera }) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity style={styles.container} onPress={() => onClose()}>
        <View style={{ marginBottom: insets.bottom, width: width - 16 }}>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              style={[
                styles.innerContainer,
                {
                  borderBottomWidth: 0.5,
                  borderColor: 'rgba(0,0,0,0.1)',
                },
              ]}
              onPress={() => {
                onAlbum();
              }}
            >
              <Text style={styles.text}>앨범에서 선택</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.innerContainer}
              onPress={() => onClose()}
            >
              <Text style={styles.text}>카메라 촬영</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => onClose()}
          >
            <Text style={[styles.text, { fontFamily: 'SFPro-Text-Semibold' }]}>
              닫기
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  selectContainer: {
    height: 112,
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 12,
  },
  innerContainer: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
  text: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 20,
    color: '#007AFF',
  },
});

export default SelectActionModal;
