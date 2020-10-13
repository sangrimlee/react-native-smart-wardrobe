import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import { Ionicons as Icon } from "@expo/vector-icons";

const ModalPicker = ({ visible, items, title, onClose, onSelect }) => {
  const [pickerValue, setPickerValue] = useState(items[0]);

  return (
    <Modal animated transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.pickerHeader}>
            <Text style={styles.button} onPress={() => onClose()}>
              취소
            </Text>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={styles.button}
              onPress={() => {
                onSelect(pickerValue);
                onClose();
              }}
            >
              확인
            </Text>
          </View>
          <Picker
            style={{
              width: "100%",
            }}
            selectedValue={pickerValue}
            onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
          >
            {items.map((item) => {
              return <Picker.Item value={item} key={item} label={item} />;
            })}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  pickerContainer: {
    height: 280,
    width: "100%",
    backgroundColor: "#FFF",
  },
  pickerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: "#F7F7F7",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.3)",
  },
  title: {
    fontFamily: "SFPro-Text-Medium",
    fontSize: 16,
  },
  button: {
    fontFamily: "SFPro-Text-Regular",
    fontSize: 15,
  },
});

export default ModalPicker;