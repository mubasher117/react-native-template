import {View, Text, Alert} from 'react-native';
import React from 'react';
import styles from './Style';
import {Image} from 'react-native-elements';
import {months} from '../../constants/Constants';
import {images} from '../../assets/images';
import {WeatherDataItemProps} from './Type';

export default function WeatherDataItem(props: WeatherDataItemProps) {
  const {item} = props;
  const {day, date} = item;

  const forecastDate = new Date(date);

  return (
    <View style={styles.mainView}>
      <Text style={styles.degree}>
        {forecastDate.getDate()} {months[forecastDate.getMonth()]}
      </Text>
      <Text style={styles.degree}>{parseInt(day?.avgtemp_c)}°</Text>
      <Image
        source={{uri: `https:${day?.condition?.icon}`}}
        style={styles.imgSty}
        defaultSource={images.cloud}
        onError={() => Alert.alert('error')}
      />
      <Text style={[styles.degree, styles.centerItem]}>
        H: {parseInt(day?.mintemp_c)}°
      </Text>
      <Text style={[styles.degree, styles.lastItem]}>
        L: {parseInt(day?.maxtemp_c)}°
      </Text>
    </View>
  );
}
