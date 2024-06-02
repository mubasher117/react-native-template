import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Header from '../../components/Header/Header';
import WeatherDataItem from '../../components/WeatherDataItem/WeatherDataItem';
import WeatherDetailItem from '../../components/WeatherDetailItem/WeatherDetailItem';
import styles from './Style';
import {RenderItemType, WeatherDetailProps} from './Type';

export default function WeatherDetail(props: WeatherDetailProps) {
  const {route} = props;
  const insets = useSafeAreaInsets();
  const weatherDetails = route?.params?.weatherDetails;

  const {current} = weatherDetails || {};

  const renderItem = ({item, index}: RenderItemType) => {
    return <WeatherDataItem item={item} index={index} />;
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header isMainScreen={false} />
      <View style={styles.setWidth}>
        <Text style={styles.daysForecast}>5-Days Forecasts</Text>
        <View>
          <FlatList
            data={weatherDetails?.forecast?.forecastday}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            bounces={false}
          />
        </View>

        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.directionPlusSpace}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <WeatherDetailItem
            title={'Feels Like'}
            value={`${current?.feelslike_c}°`}
            icon={images.temperature}
          />
          <WeatherDetailItem
            title={'Humidity'}
            value={`${current?.humidity}%`}
            icon={images.drop}
          />
          <WeatherDetailItem
            title={'UV'}
            value={`${current?.uv}`}
            icon={images.star}
          />
          <WeatherDetailItem
            title={'Wind'}
            value={`${current?.wind_kph} kph`}
            icon={images.wind}
          />
          <WeatherDetailItem
            title={'Visibitly'}
            value={`${current?.vis_km} km`}
            icon={images.eye}
          />
          <WeatherDetailItem
            title={'Pressure'}
            value={`${current?.pressure_mb} mb`}
            icon={images.downArrow}
          />
        </ScrollView>
      </View>
    </View>
  );
}
