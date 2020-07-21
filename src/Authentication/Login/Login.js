import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container, CustomTextInput, Button, Checkbox } from "../../Components";
import { SocialLogin } from "../Components";

const emailValidator = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const passwordValidator = (password) => {
    return password.length >= 8;
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Footer = (
        <View>
            <SocialLogin />
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 32,
                }}
            >
                <Text style={{ color: "white", marginRight: 4 }}>
                    Don't have an account?
                </Text>
                <Text style={{ color: "#FA6400" }}>Sign up here</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Container footer={Footer}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.description}>
                    Use your credentials below and lgoin to your account.
                </Text>
                <CustomTextInput
                    iconName="email-outline"
                    placeholder="이메일"
                    validator={emailValidator}
                    handler={(text) => setEmail(text)}
                />
                <CustomTextInput
                    iconName="lock-outline"
                    placeholder="비밀번호"
                    validator={passwordValidator}
                    secureTextEntry={true}
                    handler={(text) => setPassword(text)}
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
                    <Checkbox label="Remember me" />
                    <TouchableOpacity>
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
                    style={{}}
                    onPress={() => console.log(email, password)}
                />
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
