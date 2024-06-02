import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Image source={images.cloud} style={styles.cloudImg} />
      <Text style={styles.loadingTxt}>Weather</Text>

      <Text style={styles.loadingTxtMusturd}>ForeCasts</Text>
    </View>
  );
}
