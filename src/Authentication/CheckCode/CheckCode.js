import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Button } from "../../Components";
import {
    Header,
    KeyboardAwareView,
    CheckCodeSchema,
    CustomTextInput,
} from "../Components";
import { Formik } from "formik";

const CheckCode = ({ route, navigation }) => {
    const { email } = route.params;
    const handleCheckCode = (values, navigation) => {
        let { email, code } = values;
        fetch("http://3.21.245.113:8000/account/codeconfig", {
            method: "POST",
            body: JSON.stringify({ email, code: parseInt(code) }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.message === "code incorrect") {
                    Alert.alert("코드 오류", "코드가 일치하지 않습니다.");
                } else if (response.message === "match") {
                    console.log(response.message);
                    navigation.navigate("ResetPassword", { email });
                }
            })
            .catch((error) => console.error("Error:", error));
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <KeyboardAwareView>
                <View style={styles.inner}>
                    <Text style={styles.title}>코드를 입력하세요.</Text>
                    <Text style={styles.description}>
                        이메일로 전송된 코드를 입력해주세요.
                    </Text>
                    <Formik
                        initialValues={{ email: email, code: "123" }}
                        validationSchema={CheckCodeSchema}
                        onSubmit={(values) =>
                            handleCheckCode(values, navigation)
                        }
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <View style={{ alignItems: "center" }}>
                                <CustomTextInput
                                    iconName="lock"
                                    placeholder="코드를 입력하시오."
                                    onChangeText={handleChange("code")}
                                    onBlur={handleBlur("code")}
                                    touched={touched.code}
                                    error={errors.code}
                                />
                                <Button
                                    variant="primary"
                                    label="비밀번호 재설정"
                                    onPress={handleSubmit}
                                    style={{ marginTop: 24 }}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </KeyboardAwareView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: { flex: 1, alignItems: "center", justifyContent: "center" },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 24,
        color: "#2c2c2c",
    },
    description: {
        fontFamily: "SFPro-Text-Regular",
        fontSize: 14,
        color: "#AAA",
    },
});

export default CheckCode;
