import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Routes } from "./src/Navigations";

const fonts = {
    "SFPro-Text-Bold": require("./assets/fonts/SF-Pro-Bold.otf"),
    "SFPro-Text-Semibold": require("./assets/fonts/SF-Pro-Semibold.otf"),
    "SFPro-Text-Regular": require("./assets/fonts/SF-Pro-Regular.otf"),
    "SFPro-Text-Medium": require("./assets/fonts/SF-Pro-Medium.otf"),
    "SFPro-Text-Light": require("./assets/fonts/SF-Pro-Light.otf"),
};

export default function App() {
    let [isLoaded] = useFonts(fonts);

    if (!isLoaded) {
        return <AppLoading />;
    }
    return <Routes />;
}
