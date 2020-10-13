import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

const APIKEY = "0e6c9e4a4f83a2de1c9cd06e11095a75";

const Weather = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      let weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lang=kr&units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
      );
      setWeatherData(weatherData.data);
      await setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#AAA" />
      ) : (
        <View style={styles.weatherContainer}>
          <View style={styles.mainContainer}>
            <WeatherIcon id={weatherData.weather[0].id} />
            <Text style={styles.title}>
              {Math.floor(weatherData.main.temp)}°
            </Text>
            <Text style={[styles.title, { marginLeft: 8, marginTop: 4 }]}>
              {weatherData.weather[0].description}
            </Text>
          </View>
          <View>
            <View style={styles.detailConatiner}>
              <Text style={styles.cat}>체감온도</Text>
              <Text style={styles.detail}>
                {Math.floor(weatherData.main.feels_like)} °
              </Text>
            </View>
            <View style={styles.detailConatiner}>
              <Text style={styles.cat}>풍속</Text>
              <Text style={styles.detail}>
                {weatherData.wind.speed.toFixed(1)} m/s
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  detailConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginRight: 4,
  },
  title: {
    fontFamily: "SFPro-Text-Light",
    fontSize: 24,
    color: "#2C2C2C",
  },
  detail: {
    fontFamily: "SFPro-Text-Regular",
    fontSize: 16,
    color: "#2c2c2c",
    textAlign: "right",
  },
  cat: {
    fontFamily: "SFPro-Text-Light",
    fontSize: 14,
    color: "#999",
    textAlign: "left",
    marginRight: 16,
  },
});

export default Weather;
