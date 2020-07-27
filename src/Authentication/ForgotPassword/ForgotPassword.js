import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, CustomTextInput, Button } from "../../Components";
import { Footer, ForgotPasswordSchema } from "../Components";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as firebase from "firebase";
const ForgotPassword = ({ navigation }) => {
    const passwordReset = async (values) => {
        let { email } = values;
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container
            footer={
                <Footer
                    navigation={navigation}
                    label="Don't work?"
                    btnLabel="Try another way"
                    navigate=""
                />
            }
            center
        >
            <View style={styles.container}>
                <Text style={styles.title}>Forgot password?</Text>
                <Text style={styles.description}>
                    Enter the email associated with your account.{" "}
                </Text>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={(values) => passwordReset(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
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
                            <Button
                                variant="primary"
                                label="Reset Password"
                                onPress={handleSubmit}
                                style={{ marginTop: 24 }}
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

export default ForgotPassword;
