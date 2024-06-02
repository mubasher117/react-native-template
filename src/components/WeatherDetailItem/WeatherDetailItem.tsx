import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import styles from './Style';
import {WeatherDetailItemProps} from './Type';

const WeatherDetailItem = ({title, value, icon}: WeatherDetailItemProps) => {
  return (
    <View style={styles.lowHumadityPlusWidth}>
      <View style={styles.direction}>
        <Image source={icon} style={styles.star} />
        <Text style={styles.humidity}>{title}</Text>
      </View>

      <Text style={styles.time}>{value}</Text>
    </View>
  );
};

export default WeatherDetailItem;
