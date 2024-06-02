import {StyleSheet} from 'react-native';
import {Responsive, Theme} from '../../libs';
const {AppFonts, getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.deepBlue,
  },
  preipitaion: {
    color: Theme.colors.white,
    fontSize: AppFonts.h4,
    textAlign: 'center',
    marginTop: getHeight(1),
  },
  daysForecast: {
    color: Theme.colors.white,
    fontSize: AppFonts.h4,
    marginTop: getHeight(3),
    fontWeight: 'bold',
  },

  time: {
    color: Theme.colors.white,
    fontSize: AppFonts.h3,
  },
  star: {
    height: getHeight(5),
    width: getWidth(10),
    resizeMode: 'contain',
  },

  lowHumadityView: {
    borderColor: Theme.colors.white,
    borderWidth: 1,
    padding: 10,
    marginTop: getHeight(4),
    borderRadius: Theme.borders.normalRadius,
  },
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
    flexWrap: 'wrap',
  },
  humadity: {
    color: Theme.colors.white,
    fontSize: AppFonts.t1,
    marginLeft: getWidth(2),
  },
  lowHealth: {
    color: Theme.colors.white,
    fontWeight: 'bold',
    fontSize: AppFonts.h5,

    marginTop: getHeight(2),
  },
  setWidth: {
    flex: 1,
    marginHorizontal: getWidth(5),
  },
  pointer: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  flex: {
    flex: 1,
  },
});

export default styles;
