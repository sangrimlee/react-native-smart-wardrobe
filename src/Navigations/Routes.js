import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthUserContext } from "./AuthUserProvider";
import Loading from "./Loading";
import * as firebase from "firebase";
import { SafeAreaView, StatusBar } from "react-native";

const Routes = () => {
    const { user, setUser } = useContext(AuthUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = firebase
            .auth()
            .onAuthStateChanged(async (authUser) => {
                try {
                    await (authUser ? setUser(authUser) : setUser(null));
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                }
            });
        return unsubscribeAuth;
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
            <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
            <NavigationContainer>
                {user ? <AppStack /> : <AuthStack />}
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Routes;
