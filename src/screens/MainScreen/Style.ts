import {StyleSheet} from 'react-native';
import {Responsive, Theme} from '../../libs';
const {AppFonts, getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.deepBlue,
  },
  loading: {
    justifyContent: 'center',
  },
  inputStyle: {
    width: getWidth(80),
  },
  setWidth: {
    marginHorizontal: getWidth(2),
  },
  direction: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: getWidth(2.5),
  },

  sendImg: {
    height: getHeight(5),
    width: getWidth(10),
    resizeMode: 'contain',
    tintColor: Theme.colors.mustard,
    marginTop: getHeight(2),
  },
  seeMoreView: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: Theme.borders.extremeRadius,
    alignSelf: 'flex-end',
    marginTop: getHeight(5),
  },
  condition: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cloudImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  cloudDefault: {
    width: 0,
    height: 0,
  },
  seeMoreTxt: {
    color: Theme.colors.black,
  },

  simpleLine: {
    backgroundColor: Theme.colors.white,
    height: 1,
    marginTop: getHeight(2),
  },
  flexPLusSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(4),
  },

  todayTxt: {
    color: Theme.colors.white,
    fontWeight: 'bold',
  },

  houseImg: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: getHeight(4),
  },

  preipitaion: {
    color: Theme.colors.white,
    fontSize: AppFonts.h4,
    textAlign: 'center',
    marginTop: getHeight(1),
  },
  degreeSty: {
    color: Theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 44,
  },
  mainView: {
    backgroundColor: Theme.colors.deepBlue,
    paddingHorizontal: 16,
  },
  error: {
    color: Theme.colors.error,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  feelsLike: {
    color: Theme.colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
  degreeView: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
    marginTop: getHeight(3),
  },
  detailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
