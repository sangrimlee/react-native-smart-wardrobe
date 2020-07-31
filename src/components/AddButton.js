import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class AddButton extends Component {
    constructor() {
        super();
        this.state = {
            rotateValue: new Animated.Value(0),
        };
    }

    handlePress = () => {
        this.state.rotateValue._value != 1
            ? Animated.timing(this.state.rotateValue, {
                  toValue: 1,
                  duration: 300,
                  useNativeDriver: true,
              }).start()
            : Animated.timing(this.state.rotateValue, {
                  toValue: 0,
                  duration: 300,
                  useNativeDriver: true,
              }).start();

        console.log(this.state.rotateValue._value);
    };

    render() {
        let rotation = this.state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
        });
        return (
            // TODO : Animation
            <View style={styles.container}>
                <Animated.View style={styles.button}>
                    <TouchableOpacity onPress={this.handlePress}>
                        <Animated.View
                            style={{ transform: [{ rotate: rotation }] }}
                        >
                            <Ionicons name="md-add" color="white" size={32} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}
// const AddButton = () => {
//     const rotateRef = useRef(new Animated.Value(0)).current;
//     const rotation = rotateRef.interpolate({
//         inputRange: [0, 1],
//         outputRange: ["0deg", "45deg"],
//     });

//     const handlePress = () => {
//         rotateRef._value === 1 ? rotateRef.setValue(0) : rotateRef.setValue(1);
//         Animated.timing(rotateRef, {
//             duration: 300,
//             useNativeDriver: true,
//         }).start();
//         console.log(rotateRef._value);
//     };

//     return (
//         // TODO : Animation
//         <View style={styles.container}>
//             <Animated.View style={styles.button}>
//                 <TouchableOpacity onPress={() => handlePress()}>
//                     <Animated.View
//                         style={{ transform: [{ rotate: rotation }] }}
//                     >
//                         <Ionicons name="md-add" color="white" size={32} />
//                     </Animated.View>
//                 </TouchableOpacity>
//             </Animated.View>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",

        // position: "absolute",
        // bottom: -8,
        backgroundColor: "#FA6400",

        shadowColor: "#FA6400",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.25,
    },
});
