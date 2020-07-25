import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, CustomTextInput, Button } from "../../Components";
import { Footer, SignupSchema } from "../Components";
import { Formik } from "formik";

const Signup = ({ navigation }) => {
    return (
        <Container footer={<Footer navigation={navigation} />} right>
            <View style={styles.container}>
                <Text style={styles.title}>Create account</Text>
                <Text style={styles.description}>
                    Let’s us know what your name, email, and your password.
                </Text>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => console.log(values)}
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
                                label="Create account"
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

export default Signup;
