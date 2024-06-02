import React from 'react';
import {TextInput, Text, View} from 'react-native';

import {Theme} from '../../libs';
import styles from './NativeInputStyle';
import {NativeInputProps} from './Type';

const NativeInput = (props: NativeInputProps) => {
  const {
    onChangeText,
    placeholder,
    inputStyle,
    placeholderTextColor,
    value,
    keyboardType,
    autoFocus,
    ref,
    blurOnSubmit,
    dataDetectorTypes,
    editable,
    enterKeyHint,
    focusable,
    keyboardAppearance,
    maxLength,
    multiline,
    onBlur,
    onEndEditing,
    onFocus,
    onSubmitEditing,
    returnKeyType,
    secureTextEntry,
    textAlignVertical,
    errorText,
    selectionColor,
    inputContainerStyle,
    autoCapitalize,
    icon,
  } = props;
  return (
    <>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          errorText && {borderColor: Theme.colors.error},
        ]}>
        <View style={styles.inputicon}>{icon}</View>
        <TextInput
          style={[styles.input, inputStyle, styles.keyboard]}
          selectionColor={selectionColor}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          ref={ref}
          blurOnSubmit={blurOnSubmit}
          dataDetectorTypes={dataDetectorTypes}
          editable={editable}
          autoCapitalize={autoCapitalize}
          enterKeyHint={enterKeyHint}
          focusable={focusable}
          keyboardAppearance={keyboardAppearance}
          maxLength={maxLength || 5000}
          multiline={multiline}
          onBlur={onBlur}
          onEndEditing={onEndEditing}
          onFocus={onFocus}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          textAlignVertical={textAlignVertical}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default NativeInput;
