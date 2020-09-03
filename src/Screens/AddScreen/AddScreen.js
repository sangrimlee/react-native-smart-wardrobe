import React, { useState } from "react";
import {
    Button,
    Text,
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { ModalPicker, TextButton, TextField } from "../../Components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddImageButton from "./AddImageButton";

const Header = ({ navigation, onPress }) => {
    return (
        <View
            style={{
                height: 48,
                alignItems: "center",
                justifyContent: "space-between",

                flexDirection: "row",
                paddingHorizontal: 16,
            }}
        >
            <TextButton
                label="취소"
                color="#2c2c2c"
                onPress={() => navigation.goBack()}
            />
            <TextButton
                label="완료"
                color="#FA6400"
                onPress={() => onPress()}
            />
        </View>
    );
};

const Divider = () => {
    return <View style={styles.divider} />;
};

const AddScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    
    const [isVisible, setVisible] = useState(false);
    const categoryList = ["Outer", "Top", "Bottom", "Etc"];
    return (
        <View style={{ ...styles.container, marginTop: insets.top }}>
            <Formik
                initialValues={{
                    name: "",
                    brand: "",
                    imageUrl: "",
                    category: "Outer",
                }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Header
                            navigation={navigation}
                            onPress={handleSubmit}
                        />
                        <AddImageButton
                            onChangeImage={(value) => (values.imageUrl = value)}
                        />
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS == "ios" ? "padding" : "height"
                            }
                            style={styles.inputContainer}
                        >
                            <Text style={styles.label}>이름</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange("name")}
                                onBlur={handleBlur("name")}
                                value={values.name}
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>카테고리</Text>
                            <TouchableOpacity
                                style={styles.picker}
                                onPress={() => setVisible(true)}
                            >
                                <Text style={styles.pickerText}>
                                    {values.category}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.label}>브랜드</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange("brand")}
                                onBlur={handleBlur("brand")}
                                value={values.brand}
                                autoCapitalize="none"
                            />
                        </KeyboardAvoidingView>
                        <ModalPicker
                            visible={isVisible}
                            title="카테고리"
                            items={categoryList}
                            onSelect={(value) => (values.category = value)}
                            onClose={() => setVisible(false)}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#2C2C2C",
        marginVertical: 8,
    },
    inputContainer: {
        marginTop: 16,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    label: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 14,
        color: "#2c2c2c",
        marginBottom: 4,
    },
    input: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 16,
        height: 40,
        borderWidth: 0.5,
        borderColor: "#AAA",
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    picker: {
        height: 40,
        borderWidth: 0.5,
        borderColor: "#AAA",
        paddingHorizontal: 16,
        marginBottom: 16,
        justifyContent: "center",
    },
    pickerText: {
        fontFamily: "SFPro-Text-Light",
        fontSize: 16,
    },
});

export default AddScreen;
