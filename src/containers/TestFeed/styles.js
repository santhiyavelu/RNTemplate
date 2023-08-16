import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

export default StyleSheet.create({
  container: {flex: 1},

  postInputField: {
    margin: 10,
    height: 80,
    backgroundColor: Colors.lightGrey,
    color: 'black',
    borderRadius: 5,
    padding: 5,
  },
  submitButton: {
    margin: 10,
    height: 44,
    backgroundColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  feedCell: {
    borderWidth: Metrics.hairLineWidth,
    margin: 10,
  },
  feedPostText: {
    padding: 10,
  },
  feedActionBtns: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
});
