import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images';

export default function Header({isMainScreen}: {isMainScreen: boolean}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, isMainScreen && styles.centerJustified]}>
      {!isMainScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={images.back}
            style={styles.back}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>Weather Forecasts</Text>
    </View>
  );
}
