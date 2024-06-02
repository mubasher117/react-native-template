import { StyleSheet } from 'react-native';
import { Responsive, Theme } from '../../libs';
const { AppFonts, getWidth, getHeight } = Responsive;

const styles = StyleSheet.create({
  lowHumadityPlusWidth: {
    borderColor: Theme.colors.white,
    borderWidth: 1,
    padding: 10,
    marginTop: getHeight(4),
    borderRadius: Theme.borders.normalRadius,
    width: getWidth(40),
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  directionPlusSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  humidity: {
    color: Theme.colors.white,
    fontSize: AppFonts.t1,
    marginLeft: getWidth(2),
  },

  time: {
    color: Theme.colors.white,
    fontSize: AppFonts.h3,
    textAlign: 'center',
  },

  star: {
    height: getHeight(5),
    width: getWidth(10),
    resizeMode: 'contain',
  },
});

export default styles;
