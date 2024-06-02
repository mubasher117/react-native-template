import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Dialog, Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Header from '../../components/Header/Header';
import NativeInput from '../../components/NativeInput/NativeInput';
import WeatherDetailItem from '../../components/WeatherDetailItem/WeatherDetailItem';
import {useFetch} from '../../hooks/useFetch';
import {Theme} from '../../libs';
import styles from './Style';

export default function MainScreen() {
  const [searchCity, setSearchCity] = useState('');
  const {data, error, loading, callFetch} = useFetch(
    `/v1/forecast.json?q=${searchCity}&days=5&aqi=yes&alerts=yes`,
  );
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const {current, forecast} = data || {};

  const handlePress = () => {
    if (searchCity) {
      callFetch();
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header isMainScreen={true} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.direction}>
          <NativeInput
            placeholder={'Enter City Name'}
            placeholderTextColor={Theme.colors.grey}
            inputContainerStyle={styles.inputStyle}
            onChangeText={e => setSearchCity(e)}
            value={searchCity}
          />

          <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
            <Image source={images.send} style={styles.sendImg} />
          </TouchableOpacity>
        </View>
        {loading && (
          <View
            style={[
              styles.container,
              {paddingTop: insets.top},
              styles.loading,
            ]}>
            <Dialog.Loading />
          </View>
        )}
        {error && <Text style={styles.error}>City Not Found!</Text>}
        {data && (
          <View style={styles.mainView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WeatherDetail', {
                  weatherDetails: data,
                })
              }>
              <View style={styles.seeMoreView}>
                <Text style={styles.seeMoreTxt}>See More {'>'}</Text>
              </View>
            </TouchableOpacity>

            <>
              <Text style={styles.degreeSty}>{parseInt(current?.temp_c)}°</Text>
              <View style={styles.degreeView}>
                <View style={styles.condition}>
                  <Image
                    source={{uri: `https:${current?.condition?.icon}`}}
                    style={[styles.cloudImg, !data && styles.cloudDefault]}
                  />
                  <Text style={styles.preipitaion}>
                    {current?.condition.text}
                  </Text>
                </View>
              </View>
              <View style={styles.detailView}>
                <WeatherDetailItem
                  title={'High'}
                  value={`${parseInt(
                    forecast?.forecastday[0]?.day?.maxtemp_c,
                  )}°`}
                  icon={images.temperature}
                />
                <WeatherDetailItem
                  title={'Low'}
                  value={`${parseInt(
                    forecast?.forecastday[0]?.day?.mintemp_c,
                  )}°`}
                  icon={images.temperature}
                />
              </View>
            </>
          </View>
        )}

        <Image source={images.House} style={styles.houseImg} />
      </KeyboardAwareScrollView>
    </View>
  );
}
