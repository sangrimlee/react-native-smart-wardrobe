import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container, CustomTextInput, Button, Checkbox } from "../../Components";
import { Footer, LoginSchema } from "../Components";
import { Formik } from "formik";
import * as firebase from "firebase";

const Login = ({ navigation }) => {
    const signInWithEmail = async (values) => {
        let { email, password } = values;

        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(email, password);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Container
            footer={
                <Footer
                    navigation={navigation}
                    label="Don’t have an account?"
                    btnLabel="Sign Up here"
                    navigate="Signup"
                />
            }
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.description}>
                    Use your credentials below and lgoin to your account.
                </Text>
                <Formik
                    initialValues={{ email: "", password: "", remember: false }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => signInWithEmail(values)}
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
                        <View style={styles.container}>
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
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: 280,
                                    marginTop: 4,
                                    marginBottom: 48,
                                }}
                            >
                                <Checkbox
                                    label="Remember me"
                                    checked={values.remember}
                                    onChange={() =>
                                        setFieldValue(
                                            "remember",
                                            !values.remember
                                        )
                                    }
                                />
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ForgotPassword")
                                    }
                                >
                                    <Text
                                        style={{
                                            fontFamily: "SFPro-Text-Regular",
                                            fontSize: 14,
                                            color: "#FA6400",
                                        }}
                                    >
                                        Forgot password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Button
                                variant="primary"
                                label="Let's get started"
                                onPress={handleSubmit}
                            />
                        </View>
                    )}
                </Formik>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    title: {
        fontFamily: "SFPro-Text-Semibold",
        fontSize: 24,
        lineHeight: 30,
        marginTop: 24,
        marginBottom: 8,
        color: "#0C0D34",
    },
    description: {
        fontFamily: "SFPro-Text-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 32,
        width: 220,
        opacity: 0.5,
    },
});

export default Login;
