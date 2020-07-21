import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
    MaterialCommunityIcons as Icon,
    Feather as CheckIcon,
} from "@expo/vector-icons";

const Valid = true;
const Invalid = false;
const Pristine = null;

const CustomTextInput = ({ iconName, validator, handler, ...props }) => {
    const [input, setInput] = useState("");
    const [state, setState] = useState(null);
    const color =
        state === Pristine
            ? "#8A8D90"
            : state === Valid
            ? "#5cb85c"
            : "#d9534f";
    const checkColor = state === Valid ? "#5cb85c" : "#d9534f";
    const onChangeText = (text) => {
        handler(text);
        setInput(text);
        if (state !== Pristine) {
            validate();
        }
    };
    const validate = () => {
        const valid = validator(input);
        setState(valid);
    };
    return (
        <View style={[styles.container, { borderColor: color }]}>
            <Icon name={iconName} size={16} color={color} />
            <View style={{ flex: 1 }}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={color}
                    onBlur={validate}
                    autoCapitalize="none"
                    {...{ onChangeText }}
                    {...props}
                />
            </View>
            {(state === Valid || state === Invalid) && (
                <View
                    style={{
                        borderRadius: 10,
                        height: 20,
                        width: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: checkColor,
                    }}
                >
                    <CheckIcon
                        name={state === Valid ? "check" : "x"}
                        color="white"
                        size={16}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 280,
        height: 48,
        borderWidth: 0.5,
        borderRadius: 4,
        marginVertical: 8,
        paddingHorizontal: 16,
    },
    textInput: {
        paddingHorizontal: 16,
    },
});

export default CustomTextInput;
