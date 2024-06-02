import {StyleSheet} from 'react-native';

import {Theme, Responsive} from '../../libs';

const {AppFonts, getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colors.lightBlue,
    borderWidth: 0.7,
    borderRadius: Theme.borders.extremeRadius,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: 10,
    marginTop: getHeight(1.5),
    height: getHeight(6.6),
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  input: {
    color: Theme.colors.primary,
    fontSize: AppFonts.t3,
    fontFamily: Theme.typography.bodyRegular.fontFamily,
    marginTop: 3,
  },
  inputicon: {
    marginRight: 1,
  },
  errorText: {
    color: Theme.colors.error,
    marginLeft: getWidth(3.5),
    marginTop: getHeight(0.5),
    fontSize: AppFonts.t6,
    fontFamily: Theme.typography.bodyRegular.fontFamily,
    textAlign: 'left',
  },
});

export default styles;
