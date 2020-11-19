import axios from 'axios';

const APIKEY = '0e6c9e4a4f83a2de1c9cd06e11095a75';

export const getWeatherInfoApi = (location) => {
  const { latitude, longitude } = location;
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lang=kr&units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`,
  );
};

export const getRecommendationListApi = ({
  userToken,
  feelTemp,
  userStyle,
}) => {
  const data = {
    token: userToken,
    temp: feelTemp,
    style: userStyle,
  };
  return axios.post('http://3.21.245.113:8000/coordi', data);
};
