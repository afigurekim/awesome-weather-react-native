import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining like a BOSS',
    subtitle: 'For more info look outside',
    icon: 'weather-pouring'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny like FYRE',
    subtitle: 'Go get that ass burnt',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm in da house',
    subtitle: 'Actually, outside of da house',
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'Clouds are booooooooooring',
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Let it snow',
    subtitle: 'Do you want to build a snowman?',
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzy drizzle',
    subtitle: 'Drop it like the salt bae',
    icon: 'weather-rainy'
  },
  Haze: {
    colors: ['#304352', '#D7D2CC'],
    title: 'Hazy haze',
    subtitle: 'It\'s just like ground cloud',
    icon: 'weather-fog'
  },
  Mist: {
    colors: ['#304352', '#D7D2CC'],
    title: 'Mist!',
    subtitle: 'It\'s just like ground cloud',
    icon: 'weather-fog'
  },
}

function Weather({ weatherName, temp }) {
  console.log(weatherName)
  return(
  <LinearGradient
     colors={weatherCases[weatherName].colors}
     style={styles.container}
   >
     <View style={styles.upper}>
       <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon} />
       <Text style={styles.temp}>{temp}º</Text>
     </View>
     <View style={styles.lower}>
       <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
       <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
     </View>
   </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24
  },
})