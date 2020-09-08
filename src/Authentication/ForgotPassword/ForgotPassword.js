import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "../../Components";
import {
    Header,
    KeyboardAwareView,
    ForgotPasswordSchema,
    CustomTextInput,
} from "../Components";
import { Formik } from "formik";

const ForgotPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <KeyboardAwareView>
                <View style={styles.inner}>
                    <Text style={styles.title}>비밀번호를 잊어버렸나요?</Text>
                    <Text style={styles.description}>
                        회원가입에 이용한 이메일 주소를 입력해주세요.
                    </Text>
                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={ForgotPasswordSchema}
                        onSubmit={(values) => console.log(values)}
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
                                    iconName="email-outline"
                                    placeholder="이메일"
                                    autoCompleteType="email"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    touched={touched.email}
                                    error={errors.email}
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

export default ForgotPassword;
