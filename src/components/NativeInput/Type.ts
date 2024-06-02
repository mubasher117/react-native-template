import {
  DataDetectorTypes,
  EnterKeyHintTypeOptions,
  KeyboardTypeOptions,
  ViewStyle,
} from 'react-native';

export interface NativeInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  inputStyle: any;
  placeholderTextColor: string;
  value: string;
  keyboardType: KeyboardTypeOptions | undefined;
  autoFocus: boolean;
  ref: any;
  blurOnSubmit: boolean;
  dataDetectorTypes: DataDetectorTypes | DataDetectorTypes[] | undefined;
  editable: boolean;
  enterKeyHint: EnterKeyHintTypeOptions | undefined;
  focusable: boolean;
  keyboardAppearance: 'default' | 'light' | 'dark';
  maxLength: number | undefined;
  multiline: boolean;
  onBlur: () => void;
  onEndEditing: () => void;
  onFocus: () => void;
  onSubmitEditing: () => void;
  returnKeyType:
    | 'default'
    | 'go'
    | 'google'
    | 'join'
    | 'next'
    | 'route'
    | 'search'
    | 'send'
    | 'done'
    | 'emergency-call';
  secureTextEntry: boolean;
  textAlignVertical: 'top' | 'bottom' | 'center';
  errorText: string | undefined;
  selectionColor: string | undefined;
  inputContainerStyle: ViewStyle | Array<ViewStyle | undefined> | undefined;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
  icon: React.ReactNode | undefined;
}
