import {StyleSheet} from 'react-native';
import {Responsive, Theme} from '../../libs';
const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  degree: {
    color: Theme.colors.white,
    width: '15%',
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  imgSty: {
    height: getHeight(5),
    width: getWidth(10),
    resizeMode: 'contain',
  },
  centerItem: {
    textAlign: 'center',
  },
  lastItem: {
    textAlign: 'right',
  },
});

export default styles;
