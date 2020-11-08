import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherIcon from './WeatherIcon';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '../../../store/actions/recommend';

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherInfo } = useSelector((state) => state.recommend);
  const { loading } = useSelector((state) => state);
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      dispatch(getWeatherInfo({ latitude, longitude }));
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {loading['recommend/GET_WEATHER_INFO'] !== false ? (
        <ActivityIndicator size="small" color="#AAA" />
      ) : (
        <View style={styles.weatherContainer}>
          <View style={styles.mainContainer}>
            <WeatherIcon id={weatherInfo.id} />
            <Text style={styles.title}>{weatherInfo.temp}°</Text>
            <Text
              style={[
                styles.title,
                { marginLeft: 8, marginTop: 4, width: 120 },
              ]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {weatherInfo.description}
            </Text>
          </View>
          <View>
            <View style={styles.detailConatiner}>
              <Text style={styles.cat}>체감온도</Text>
              <Text style={styles.detail}>{weatherInfo.feelTemp} °</Text>
            </View>
            <View style={styles.detailConatiner}>
              <Text style={styles.cat}>풍속</Text>
              <Text style={styles.detail}>{weatherInfo.windSpeed} m/s</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80 + Constants.statusBarHeight,
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detailConatiner: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: 4,
  },
  title: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 24,
    color: '#2C2C2C',
  },
  detail: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 16,
    color: '#2c2c2c',
    textAlign: 'right',
  },
  cat: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
    color: '#999',
    textAlign: 'left',
    marginRight: 16,
  },
});

export default Weather;
