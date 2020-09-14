import React, { useReducer, useEffect, useMemo } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthUserContext } from "../Components";

const Routes = () => {
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case "RETRIEVE_TOKEN":
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case "LOGIN":
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case "LOGOUT":
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case "REGISTER":
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };
    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(
        () => ({
            login: async (res) => {
                const userToken = String(res.token);
                try {
                    await AsyncStorage.setItem("userToken", userToken);
                } catch (e) {
                    console.log(e);
                }
                dispatch({ type: "LOGIN", id: null, token: userToken });
            },
            signOut: async () => {
                console.log("로그아웃");
                try {
                    await AsyncStorage.removeItem("userToken");
                } catch (e) {
                    console.log(e);
                }
                dispatch({ type: "LOGOUT" });
            },
            signUp: () => {},
        }),
        []
    );

    useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem("userToken");
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return <AppLoading />;
    }
    return (
        <AuthUserContext.Provider value={authContext}>
            <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
                <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
                <NavigationContainer>
                    {loginState.userToken !== null ? (
                        <AppStack />
                    ) : (
                        <AuthStack />
                    )}
                </NavigationContainer>
            </View>
        </AuthUserContext.Provider>
    );
};

export default Routes;
