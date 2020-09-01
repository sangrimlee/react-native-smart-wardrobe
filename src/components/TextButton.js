import React from "react";
import { Text, TouchableOpacity } from "react-native";

const TextButton = ({
    label,
    onPress,
    color,
    size,
    buttonStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity style={{ ...buttonStyle }} onPress={() => onPress()}>
            <Text
                style={{
                    ...textStyle,
                    fontFamily: "SFPro-Text-Regular",
                    color: color ? color : "#2c2c2c",
                    fontSize: size ? size : 16,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;
