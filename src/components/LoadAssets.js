import React, { useState, useEffect, useCallback, ReactElement } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY_${Constants.manifest.sdkVersion}`;

const LoadAssets = ({ fonts, children }) => {
    let [isLoaded] = Font.useFonts(fonts);
    let [initialState, setInitialState] = useState();
    const onStateChange = useCallback((state) => {
        AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)), [];
    });
    if (!isLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer {...{ onStateChange, initialState }}>
            {children}
        </NavigationContainer>
    );
};

export default LoadAssets;
