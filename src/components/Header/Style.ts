import {StyleSheet} from 'react-native';
import {Theme} from '../../libs';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: Theme.colors.white,
    borderBottomWidth: 0.5,
  },
  centerJustified: {
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    width: 20,
    height: 20,
  },
});

export default styles;
