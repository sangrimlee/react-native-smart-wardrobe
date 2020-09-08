import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "../../Components";
import {
    KeyboardAwareView,
    Header,
    Footer,
    SignupSchema,
    CustomTextInput,
} from "../Components";

import { Formik } from "formik";

const Signup = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <KeyboardAwareView>
                <View style={styles.inner}>
                    <Text style={styles.title}>회원가입</Text>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => signUpWithEmail(values)}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            values,
                            errors,
                            touched,
                        }) => (
                            <View style={{ alignItems: "center" }}>
                                <CustomTextInput
                                    iconName="account-outline"
                                    placeholder="이름"
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    touched={touched.name}
                                    error={errors.name}
                                />
                                <CustomTextInput
                                    iconName="email-outline"
                                    placeholder="이메일"
                                    autoCompleteType="email"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <CustomTextInput
                                    iconName="lock-outline"
                                    placeholder="비밀번호"
                                    secureTextEntry={true}
                                    autoCompleteType="password"
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    touched={touched.password}
                                    error={errors.password}
                                />

                                <Button
                                    variant="primary"
                                    label="회원가입"
                                    onPress={handleSubmit}
                                    style={{ marginTop: 24 }}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </KeyboardAwareView>
            <Footer
                label="계정이 있으신가요?"
                btnLabel="로그인"
                navigation={navigation}
                navigate="Login"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 8,
        color: "#0C0D34",
    },
});

export default Signup;
