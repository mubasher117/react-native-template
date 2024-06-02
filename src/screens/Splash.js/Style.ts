import {StyleSheet} from 'react-native';
import {Responsive, Theme} from '../../libs';
const {AppFonts, getHeight} = Responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.black,
  },

  cloudImg: {
    width: '100%',
    height: getHeight(50),
    resizeMode: 'contain',
  },

  loadingTxtMusturd: {
    color: Theme.colors.mustard,
    fontSize: AppFonts.h1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loadingTxt: {
    color: Theme.colors.white,
    fontSize: AppFonts.h1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
